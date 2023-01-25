/**
 * @author mango
 * @description 导出 fetch 单例
 */

import FetchRequest from "./request";
import general from "./middlewares/general";

const { request } = new FetchRequest([ general ]);

export default request;

export * from './model';
export * from './utils';

export { default as compose } from './compose';
export { default as FetchRequest } from './request';
export { default as FetchContext } from './context';
