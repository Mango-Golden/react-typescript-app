/**
 * @author mango
 * @description CSS3变量相关方法
 */

import { isFunction, isString } from 'lodash-es';

const { getComputedStyle } = window;

/**
 * 在目标DOM中根据CSS变量名称获取对应的样式
 * @template N CSS变量泛型，默认为`string`类型
 * @param name CSS变量名称
 * @param params 可选项
 * @param params.element 目标DOM
 * @param params.default 目标样式默认值
 * @returns {string | undefined} 对应的样式
 */
export function getCSSVariable<N extends string = string>(
  name?: N,
  params: {
    default?: string
    element?: Element | null
  } = {},
) {
  // 检查浏览器是否存在这个API
  if (isFunction(getComputedStyle)) {
    if (isString(name)) {
      const element = params.element ?? document.body;
      const value = getComputedStyle(element).getPropertyValue(name);
      return value.length ? value.trim() : params.default ?? name;
    }
  }

  return params.default;
}
