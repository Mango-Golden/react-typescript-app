/**
 * @author mango
 * @description 异常消息捕获
 */

import { useMemo, useEffect } from 'react';
import { isNil, merge } from "lodash-es";
import { nanoid } from "nanoid";

import { DEFAULT_ERR_MSG } from "@constants/message";
import { catchErrMsg } from "@service";

export type Params = {
  /** 默认报错提示 */
  defaultMsg: string;
  /** 错误消息展示UI */
  interaction: (key: string, message: string, error: unknown) => void;
}

const initial: Params = {
  interaction: console.info,
  defaultMsg: DEFAULT_ERR_MSG,
};

export default function useException<T = unknown>(
  error: T,
  params: Partial<Params> = {},
) {
  /** 当前生命周期唯一标识符 */
  const key = useMemo(() => nanoid(), []);

  const { defaultMsg, interaction } = useMemo(() => {
    return merge({}, initial, params);
  }, [ params ]);

  useEffect(() => {
    if (isNil(error)) return;
    const msg = catchErrMsg(error);
    interaction?.(key, msg ?? defaultMsg, error);
  }, [ error ]);
}
