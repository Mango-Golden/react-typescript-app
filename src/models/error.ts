/**
 * @author mango
 * @description 自定义异常类
 */

import type { SystemErrorCode } from '@constants/enums/system';
import { DEFAULT_ERR_MSG } from '@constants/message';
import { ServiceError } from '@utils/error';

export class SystemServiceError extends ServiceError<SystemErrorCode> {
  static defaultMsg = DEFAULT_ERR_MSG;
}
