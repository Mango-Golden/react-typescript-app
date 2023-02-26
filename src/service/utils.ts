/**
 * @author mango
 * @description fetch utils
 */

import mime from 'mime';
import { isObject, isString } from 'lodash-es';

export function getBodyType(response: Response) {
  const { headers } = response;
  const type = headers.get('content-type');
  const types = type?.split(';') ?? [];

  return types.reduce<string | null>((accom, element) => {
    if (isString(accom)) return accom;
    return mime.getExtension(element);
  }, null);
}

export function catchErrMsg(error: unknown) {
  if (isString(error)) return error;
  if (isObject(error)) {
    if ('msg' in error) {
      const { msg } = error;
      if (isString(msg)) return msg;
    }
    if ('errMsg' in error) {
      const { errMsg } = error;
      if (isString(errMsg)) return errMsg;
    }
    if ('message' in error) {
      const { message } = error;
      if (isString(message)) return message;
    }
  }
}
