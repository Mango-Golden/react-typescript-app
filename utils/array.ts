/**
 * @author mango
 * @description 数组工具方法
 */

import type { FlaseType } from '@utils/types';

/** 过滤数据中的假值 */
export function filterFalse<T extends Exclude<unknown, FlaseType> = unknown>(source: (T | FlaseType)[]) {
  return source.filter(Boolean) as T[];
}
