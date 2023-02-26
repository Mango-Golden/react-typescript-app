/**
 * @author mango
 * @description fetch context
 */

import { isNil } from 'lodash-es';

import { isPureObject } from '@utils/is-esm';
import type { RequestContextOptions } from './model';

function parse(api: string) {
  const [pathname, ...searchs] = api.split('?');
  const search = searchs.join('?');
  return { pathname, search };
}

export default class FetchContext<T = unknown> {
  /** 接口地址 */
  public api: string;
  /** 资源地址 */
  public src: string;
  /** json响应体 */
  public body?: T;
  /** fetch options */
  public options: RequestInit;
  /** 资源地址参数 */
  public search?: URLSearchParams;
  /** 响应报文 */
  public response?: Response;
  /** 响应体 mime-type */
  public type?: string | null;

  constructor(api: string, options: RequestContextOptions = {}) {
    const { payload, ...params } = options;
    const { search, pathname } = parse(api);

    if (isNil(payload))
      params.method = params.method ?? 'GET';

    if (payload instanceof URLSearchParams) {
      const string = `${payload}&${search}`;
      params.method = params.method ?? 'GET';
      this.search = new URLSearchParams(string);
    }

    if (!params.method) {
      params.method = 'POST';
      params.body = isPureObject(payload)
        ? JSON.stringify(payload)
        : payload;
    }

    this.api = pathname;
    this.options = params;
    this.src = `${pathname}${this.search ?? ''}`;
  }
}
