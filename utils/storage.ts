/**
 * @author mango
 * @description storage 封装(单例模式)
 */

const { getItem, setItem } = localStorage;

export class LocalStorage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  /** 获取`key`对应的值 */
  public get = () => getItem(this.key);

  /** 设置`key`对应的值 */
  public set = (value: string) => setItem(this.key, value);
}
