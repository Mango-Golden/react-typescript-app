import { isObject } from 'lodash-es';

export function isPureObject(source: unknown): source is object {
  if (!isObject(source)) return false;
  if (source instanceof Date) return false;
  if (source instanceof Blob) return false;
  if (source instanceof FormData) return false;
  if (source instanceof ReadableStream) return false;
  if (source instanceof URLSearchParams) return false;
  return true;
}
