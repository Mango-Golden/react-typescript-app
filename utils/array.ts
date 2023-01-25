/**
 * @author mango
 * @description 数组工具方法
 */

import { FlaseType } from "@models/common";

/** 过滤数据中的假值 */
export function filterFalse<T extends Exclude<unknown, FlaseType> = unknown>(source: (T | FlaseType)[]) {
  return source.filter(Boolean) as T[];
}
