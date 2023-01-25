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

/** 
 * 动态主题
 * @param {SystemTheme} 项目主题
 * @param {Element | null} target 样式挂载目标
 */
export default function useTheme(
  theme: SystemTheme,
  target?: Element | null
) {
  const { key, filename } = systemThemeAttrs[theme];

  const { data, error, isLoading } = useQuery(
    ['system-theme-scss', key],
    async () => {
      await import(
        `../styles/themes/${filename}`
      );
      return key;
    }
  )

  useEffect(() => {
    if (isNil(data)) return;
    const { body } = document;
    const container = target ?? body;

    container.classList.add(data);
    return () => {
      container.classList.remove(data);
    }
  }, [ data ])

  return { error, isLoading };
}
