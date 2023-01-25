/**
 * @author mango
 * @description 通用中间件
 */

import { SystemErrorCode } from "@constants/enums/system";
import { catchErrMsg, FetchContext, Middleware } from "@service";

import { QueryError } from "@~/initial";

const general: Middleware<FetchContext> = async (context, next) => {
  await next();

  const { response } = context;

  if (response) {
    const res: unknown = context.body ??
      (await response.text());
    
    if (!response.ok) {
      /* 捕获异常并将其抛出到react-query */
      throw new QueryError({
        code: SystemErrorCode.Normal,
        status: response.status,
        message: catchErrMsg(res),
      })
    }
  }
}

export default general;
