/**
 * @author mango
 * @description 通用中间件
 */

import { SystemErrorCode } from '@constants/enums/system';
import type { FetchContext, Middleware } from '@service';
import { catchErrMsg } from '@service';
import { SystemServiceError } from '@models/error';

const general: Middleware<FetchContext> = async (context, next) => {
  await next();

  const { response } = context;

  if (response) {
    const res: unknown = context.body
      ?? (await response.text());

    if (!response.ok) {
      /* 捕获异常并将其抛出到react-query */
      throw new SystemServiceError({
        code: SystemErrorCode.Normal,
        status: response.status,
        message: catchErrMsg(res),
      });
    }
  }
};

export default general;
