/**
 * @author mango
 * @description 页面懒加载
 */

import { lazy, Suspense, useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { isString } from "lodash-es";

import { SystemErrorCode } from "@constants/enums/system";
import { ERROR_BOUNDARY_MSG } from "@constants/message";

import ErrorBoundary from "./error.boundary";
import { useErrorCode } from "./hooks";

const factory = (path: string) => import(`../pages${path}`);

export const DefaultRender: React.FC<{ error: unknown }> = (props) => {
  const { error } = props;
  const code = useErrorCode(error);

  if (code === SystemErrorCode.NotFound) {
    return <Navigate to="/notfound" />
  }

  return <h1>{ERROR_BOUNDARY_MSG}</h1>
}

export const PageLazyLoader: React.FC = () => {
  const { key, pathname } = useLocation();
  
  const Lazy = useMemo(() => {
    if (!isString(pathname)) return null;
    return lazy(() => factory(pathname));
  }, [ pathname ])
  
  return (
    <ErrorBoundary
      key={key}
      render={DefaultRender}
    >
      <Suspense fallback={<div>loading...</div>}>
        {Lazy && <Lazy/>}
      </Suspense>
    </ErrorBoundary>
  )
}
