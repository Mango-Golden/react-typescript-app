/**
 * @author mango
 * @description 项目配置
 */

import { resolve } from "path";

const { PWD, INIT_CWD } = process.env;

/** 项目所在路径 */
export const dirname = PWD ?? INIT_CWD ?? resolve(__filename, "../");

const { npm_package_version } = process.env;

/** 项目版本 */
export const version = npm_package_version;
