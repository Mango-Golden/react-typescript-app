/**
 * @author mango
 * @description 项目初始配置
 */

import dayjs from 'dayjs';
import { isNil, isString } from 'lodash-es';

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const name = process.env.__APP_ENV__;
const root = process.env.__APP_CONTAINER__;

function undeclare(keyname: string) {
  throw new Error(`Undeclare environment: ${keyname}`);
}

if (!isString(name)) undeclare('__APP_ENV__');

if (!isString(root)) undeclare('__APP_CONTAINER__');

const element = document.getElementById(root);

if (isNil(element))
  throw new Error(`Dom #${root} is undeclare`);

/** react render target */
export const container = element;

export const env = {
  /** app env name */
  name,
};
