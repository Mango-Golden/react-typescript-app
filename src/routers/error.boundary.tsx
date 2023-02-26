/**
 * @author mango
 * @description 页面异常捕获
 */

import { Component } from 'react';
import { isNil } from 'lodash-es';

export interface ErrorBoundaryState {
  error: Error | null
}

export interface ErrorBoundaryProps {
  render?: React.FC<ErrorBoundaryState>
}

export function ErrorPage() {
  return <h1>Something went wrong</h1>;
}

export default class ErrorBoundary extends Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (isNil(error)) return children;

    const { render } = this.props;
    return render?.({ error }) ?? <ErrorPage/>;
  }
}
