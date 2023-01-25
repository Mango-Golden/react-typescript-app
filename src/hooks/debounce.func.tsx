/**
 * @author mango
 * @description 防抖函数
 */

import { debounce, DebounceSettings } from 'lodash-es';
import { useEffect, useMemo } from 'react';

export interface Params extends DebounceSettings {
  /** 防抖延迟 */
  wait?: number;
}

/** 目标函数类型 */
export type CallBackFn = (...args: any[]) => unknown;

/** 
 * 将 lodash debounce 封装为hooks
 * @param {CallBackFn} func 目标函数
 * @param {Params} params debounce 设置
 */
export default function useDebounceFunc<T extends CallBackFn>(
  func: T,
  params: Params,
) {
  const { wait, ...others } = params;

  const debounced = useMemo(
    () => debounce(func, wait, others),
    [ func, wait, others ],
  );

  useEffect(() => debounced.cancel, []);

  return {
    run: debounced,
    flush: debounced.flush,
    cancel: debounced.cancel,
  }
}
