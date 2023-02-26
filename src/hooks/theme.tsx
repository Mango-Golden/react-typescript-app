/**
 * @author mango
 * @description 主题控制
 */

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { isNil } from 'lodash-es';

import {
  type SystemTheme,
  systemThemeAttrs,
} from '@constants/enums/system';
import { container } from '@~/initial';
import { SYSTEM_THEME } from '@constants/query.key';

/**
 * 动态主题
 * @param {SystemTheme} 项目主题
 */
export default function useTheme(
  theme: SystemTheme,
) {
  const { key, path } = systemThemeAttrs[theme];

  const { data, error, isLoading } = useQuery(
    [SYSTEM_THEME, key],
    async () => {
      await import(
        `../styles/themes/${path}`
      );
      return key;
    },
  );

  useEffect(() => {
    if (isNil(data)) return;

    container.classList.add(data);
    return () => {
      container.classList.remove(data);
    };
  }, [data]);

  return { error, isLoading };
}
