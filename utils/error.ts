/**
 * @author mango
 * @description 异常响应体错误对象
 */

export interface ServiceErrorParams<EC extends number = number> {
  /** 错误码 */
  code: EC
  /** HTTP状态码 */
  status: number
  /** 错误文本 */
  message?: string
}

export class ServiceError<EC extends number = number> extends Error {
  static defaultMsg = 'Network Error';

  code: EC;

  status: number;

  message: string;

  constructor(params: ServiceErrorParams<EC>) {
    const { defaultMsg } = ServiceError;
    const { status, code, message = defaultMsg } = params;

    super(message);
    this.code = code;
    this.status = status;
    this.message = message;
  }
}
