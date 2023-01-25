/**
 * @author mango
 * @description 项目枚举
 */

import { EnumsAttrs } from "./model";

/** 系统主题 */
export const enum SystemTheme {
  /** 暗色主题 */
  Dark,
  /** 亮色主题 */
  Light,
}

export type SystemThemeTypes = 'dark' | 'light';

export const systemThemeAttrs: EnumsAttrs<
  SystemTheme,
  SystemThemeTypes,
  {
    filename: string;
  }
> = {
  [SystemTheme.Dark]: {
    key: 'dark',
    name: '暗色主题',
    filename: "dark.global.css",
  },
  [SystemTheme.Light]: {
    key: 'light',
    name: '亮色主题',
    filename: "light.global.css",
  },
}

/**
 * 前端业务错误码
 * @description 此处的HTTP状态码仅作为示例
 */
export const enum SystemErrorCode {
  /** BadRequest */
  BadRequest = 400,
  /** Unauthorized */
  Unauthorized = 401,
  /** Forbidden */
  Forbidden = 403,
  /** NotFound */
  NotFound = 404,
  /** MethodNotAllowed */
  MethodNotAllowed = 405,
  /** Timeout */
  Timeout = 408,
  /** Normal */
  Normal = 200,
  /** Unknown */
  Unknown = -1,
}
