/**
 * @author mango
 * @description 工具泛型
 */

/** 收敛Omit第二个参数的类型 */
export type OmitOf<T, K extends keyof T> = Omit<T, K>;

/** 用来将所有属性的 readonly 移除 */
export type MutableType<T> = { -readonly [P in keyof T]: T[P] };

/** 生成一份object的key的类型，并将非 T 继承类型的key的值类型置为 never */
export type ExtractType<O, T> = { [K in keyof O]: O[K] extends T ? O[K] : unknown };
