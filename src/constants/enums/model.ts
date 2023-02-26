/**
 * @author mango
 * @description 常量model
 */

/**
 * 枚举字段属性
 * @example
 ```
 const enum Size {
    mini,
    normal,
 };

 type SizeType = "mini" | "normal";

 const sizeAttrs: EnumsAttrs<Size, SizeType, {
    unit: "px" | "vw";
 }> = {
    [Size.mini]: {
      key: "mini",
      name: "迷你",
      unit: "px",
    },
    [Size.normal]: {
      key: "normal",
      name: "正常",
      unit: "px",
    },
 };
 ```
 */
export type EnumsAttrs<
  /** 枚举泛型 */
  T extends string | number,
  /** 枚举字段Key的泛型 */
  K extends string = string,
  /** 枚举值拓展 */
  E extends Object = {},
> = Record<
  T,
  {
    /** 枚举字段Key */
    key: K
    /** 枚举字段展示文案 */
    name: string
    /** 枚举字段展示图标 */
    icon?: React.ReactNode
  } & E
>;
