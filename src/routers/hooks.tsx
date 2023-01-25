/**
 * @author mango
 * @description page router hooks
 */

import { useMemo } from "react";
import { isNil } from "lodash-es";

import { SystemErrorCode } from "@constants/enums/system";

export function useErrorCode(error: unknown): SystemErrorCode | undefined {

  return useMemo(() => {
    if (isNil(error)) return;

    if (!(error instanceof Error)) {
      return SystemErrorCode.Unknown;
    }

    const { message } = error;
    if (message.startsWith('Cannot find module')) {
      return SystemErrorCode.NotFound;
    }
  }, [ error ]);
}