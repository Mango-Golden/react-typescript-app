/**
 * @author mango
 * @description react-query 初始化 client
 */

import { useMemo } from 'react';
import { isString } from 'lodash-es';

import { catchErrMsg } from '@service';
import { useDebounce, useSet } from 'react-use';
import type { QueryClientConfig } from 'react-query';
import { QueryClient } from 'react-query';
import { SystemServiceError } from '@models/error';

export interface QueryClientParams extends Pick<QueryClientConfig, 'queryCache'> {
}

/** 错误消息展示交互 */
function interaction(msg: string) {
  console.error(msg);
}

export default function useNewQueryClient(
  params: QueryClientParams = {},
) {
  const [errors, actions] = useSet(new Set());

  useDebounce(() => {
    const msgs: Record<string, boolean> = {};

    errors.forEach((error) => {
      if (error instanceof SystemServiceError) {
        if (!msgs[error.message]) {
          interaction(error.message);
          msgs[error.message] = true;
        }
        return;
      }
      /* 如果捕获到异常消息则抛出异常 */
      const msg = catchErrMsg(error);
      if (isString(msg) && !msgs[msg]) {
        interaction(msg);
        msgs[msg] = true;
      }
    });
    actions.reset();
  }, 160, [errors]);

  return useMemo(() => new QueryClient({
    ...params,
    defaultOptions: {
      queries: {
        retry(failureCount, error) {
          if (error instanceof SystemServiceError) {
            if (error.status === 500) {
              return failureCount < 2;
            }
          }
          return false;
        },
        onError: actions.add,
      },
    },
  }), []);
}
