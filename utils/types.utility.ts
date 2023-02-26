/**
 * @author mango
 * @description 工具泛型
 */

import type { Nil } from '@utils/types';

/** 获取对象中值的类型为`T`的键 */
export type ExtractKey<T, A> = {
  [K in keyof T]-?: T[K] extends A ? K : never;
}[keyof T];

/** 获取对象中值的类型不为`T`的键 */
export type ExcludeKey<T, A> = {
  [K in keyof T]-?: T[K] extends A ? never : K;
}[keyof T];

/** 收敛`Omit`工具类第二个参数的类型 */
export type OmitOf<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** 剔除值为`Nil`类型的键值对 */
export type OmitNil<T> = Pick<T, ExtractKey<T, Nil>>;
