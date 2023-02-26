/**
 * @author mango
 * @description 页面懒加载
 */

import { Suspense, lazy, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isString } from 'lodash-es';

import { SystemErrorCode } from '@constants/enums/system';

import type { ErrorBoundaryState } from '@routers/error.boundary';
import ErrorBoundary, { ErrorPage } from '@routers/error.boundary';
import { useErrorCode } from '@routers/hooks';

const factory = (path: string) => import(`../pages${path}`);

export const ErrorHandle: React.FC<ErrorBoundaryState> = (props) => {
  const { error } = props;
  const code = useErrorCode(error);

  if (code === SystemErrorCode.NotFound) {
    return <Navigate to="/notfound" />;
  }

  return <ErrorPage/>;
};

export const PageLazyLoader: React.FC = () => {
  const { key, pathname } = useLocation();

  const Lazy = useMemo(() => {
    if (!isString(pathname)) return null;
    return lazy(() => factory(pathname));
  }, [pathname]);

  return (
    <ErrorBoundary
      key={key}
      render={ErrorHandle}
    >
      <Suspense fallback={<div>loading...</div>}>
        {Lazy && <Lazy/>}
      </Suspense>
    </ErrorBoundary>
  );
};
