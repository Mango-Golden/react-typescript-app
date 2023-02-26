/**
 * @author mango
 * @description fetch model
 */

export const methods = [
  'GET',
  'PUT',
  'POST',
  'HEAD',
  'TRACE',
  'DELETE',
  'CONNECT',
  'OPTIONS',
] as const;

export type MethodTypes = RequestInit['method'] & typeof methods[number];

export interface RequestParams extends RequestInit {
  method?: MethodTypes
}

export type RequestContextOptions = RequestParams & {
  payload?: object | FormData
};

export type { Next, Middleware, ComposedMiddleware } from './compose';
