/**
 * @author mango
 * @description 项目枚举
 */

import type { EnumsAttrs } from './model';

/** 系统主题 */
export const enum SystemTheme {
  /** 暗色主题 */
  Dark = 'dark',
  /** 亮色主题 */
  Light = 'light',
}

export const systemThemeAttrs: EnumsAttrs<
  SystemTheme,
  SystemTheme,
  {
    path: string
  }
> = {
  [SystemTheme.Dark]: {
    key: SystemTheme.Dark,
    name: '暗色主题',
    path: 'dark.global.scss',
  },
  [SystemTheme.Light]: {
    key: SystemTheme.Light,
    name: '亮色主题',
    path: 'light.global.scss',
  },
};

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
