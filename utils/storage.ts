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

  public get = () => getItem(this.key);

  public set = (value: string) => setItem(this.key, value);
}
