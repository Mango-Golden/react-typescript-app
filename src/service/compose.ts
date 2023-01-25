/**
 * @author mango
 * @description 中间件构造器(洋葱模型)
 */

export type Next = () => Promise<void>;

export type Middleware<T> = (context: T, next: Next) => void;

export type ComposedMiddleware<T> = (context: T, next: Next) => Promise<void>;

export default function compose<T>(middlewares: Middleware<T>[]): ComposedMiddleware<T> {
  return function (context: T, next?: Next) {
    const closure = { offset: -1 };

    function dispatch(index: number): Promise<void> {
      if (index <= closure.offset) {
        throw new Error("next() called mutiple times");
      }
      
      closure.offset = index;

      if (index === middlewares.length) {
        return Promise.resolve(next?.());
      }

      const middleware = middlewares[index];

      return Promise.resolve(
        middleware(context, dispatch.bind(null, index + 1)),
      )
    }

    return dispatch(0);
  }
}
