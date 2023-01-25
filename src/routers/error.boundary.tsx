/**
 * @author mango
 * @description 页面异常捕获
 */

import { Component } from 'react';
import { isNil } from 'lodash-es';

import { SystemErrorCode } from '@constants/enums/system';
import { ERROR_BOUNDARY_MSG } from '@constants/message';

export type ErrorBoundaryState = {
  error: unknown;
  code?: SystemErrorCode;
};

export interface ErrorBoundaryProps {
  render?: React.FC<{ error: unknown }>
};

export default class ErrorBoundary extends Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getErrorCode(error: unknown): SystemErrorCode | undefined {
    if (!(error instanceof Error)) {
      return SystemErrorCode.Unknown;
    }

    const { message } = error;
    if (message.startsWith('Cannot find module')) {
      return SystemErrorCode.NotFound;
    }
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    const { getErrorCode } = ErrorBoundary;
    const code = getErrorCode(error);
    return { error, code };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (isNil(error)) return children;

    const { render } = this.props;
    render?.({ error }) ?? <h1>{ERROR_BOUNDARY_MSG}</h1>
  }
}