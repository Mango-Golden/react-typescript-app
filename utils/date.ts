/**
 * @author mango
 * @description dayjs 通用方法
 */

import dayjs from 'dayjs';
import { isNumber, isSafeInteger, isString } from 'lodash-es';

export const enum Format {
  /** 年月日 2023-01-01 */
  Date = 'YYYY-MM-DD',
  /** 精确时间 2023-01-01 08:00:00 */
  Exact = 'YYYY-MM-DD HH:mm:ss',
}

/** 获取当前时间 */
export function getCurrentTime() {
  return dayjs().format(Format.Exact);
}

/** 判断是否时间戳 */
export function isTimestamp(source: unknown): source is number {
  if (!isNumber(source))
    return false;
  if (!isSafeInteger(source))
    return false;
  const { length } = String(source);
  return length === 10 || length === 13;
}

export function toDayJS(
  source: string | number | null | undefined,
  format: string = Format.Date,
) {
  if (isString(source)) {
    const current = dayjs(source, format);
    if (current.isValid())
      return current;
  }
  else if (isTimestamp(source)) {
    const { length } = String(source);
    const target = length === 13
      ? source / 1000
      : source;
    const current = dayjs.unix(target);
    if (current.isValid())
      return current;
  }
}
