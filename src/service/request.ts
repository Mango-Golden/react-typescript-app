/**
 * @author mango
 * @description fetch封装(外观模式)
 */

import { isNil } from 'lodash-es';

import compose, { type Middleware } from './compose';
import FetchContext from './context';
import {
  methods,
  type MethodTypes,
  type RequestParams,
} from './model';
import { getBodyType } from './utils';

export type RequestPayload = object | FormData | URLSearchParams;

export default class FetchRequest {
  static methods: MethodTypes[] = [ ...methods ]

  private middlewares: Middleware<FetchContext>[];

  constructor (middlewares: Middleware<FetchContext>[]) {
    this.middlewares = middlewares;
  }

  public request = async<T extends any>(
    api: string,
    payload?: object | FormData,
    params: RequestParams = {},
  ) => {
    const context = new FetchContext<T>(api, { payload, ...params });

    const composed = compose<FetchContext<T>>(this.middlewares);

    await composed(context, async () => {
      const { src, options } = context;
      context.response = await fetch(src, options);
      context.type = getBodyType(context.response);

      const { response, type } = context;
      switch (type) {
        case "json":
          context.body = await response.json() as T;
          break;
        case "blob":
          context.body = await response.blob() as T;
          break;
        default:
          context.body = await response.text() as T;
          break;
      };
    });

    if (isNil(context.response)) {
      throw new Error("fetch is not response");
    }

    return context.body as T;
  }
}
