/**
 * @author mango
 * @description 项目初始配置
 */

import { QueryClient } from 'react-query';
import dayjs from 'dayjs';
import { isNil, isString } from 'lodash-es';

import 'dayjs/locale/zh-cn';
import { ServiceError } from '@utils/error';
import { SystemErrorCode } from '@constants/enums/system';
import { DEFAULT_ERR_MSG } from '@constants/message';

function undeclare(keyname: string) {
  throw new Error(`Undeclare environment: ${keyname}`);
}

const name = process.env.__APP_ENV__;
const root = process.env.__APP_CONTAINER__;

if (!isString(name)) undeclare('__APP_ENV__');
if (!isString(root)) undeclare('__APP_CONTAINER__');

const element = document.getElementById(root);

if (isNil(element)) throw new Error(`Dom #${root} is undeclare`);

/** react render target */
export const container = element;

export const env = {
  /** app env name */
  name,
}

dayjs.locale("zh-cn");

export class QueryError extends ServiceError<SystemErrorCode> {
  static defaultMsg = DEFAULT_ERR_MSG;
}

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry (count, error) {
        if (error instanceof QueryError) {
          const { status } = error;
          if ([
            401, // 401错误不触发重试逻辑
            403, // 403错误不触发重试逻辑
            404, // 404错误不触发重试逻辑
            405, // 405错误不触发重试逻辑
          ].includes(status)) return false;
        }
        // 最多重试三次
        return count < 2;
      }
    }
  }
})
