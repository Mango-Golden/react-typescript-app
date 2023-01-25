/**
 * @author mango
 * @description webpack build
 */

import webpack from 'webpack'

import config from '@config/webpack/product.config';
import { getCurrentTime } from '@utils/date';

function info(message: string) {
  console.info(
    getCurrentTime(),
    `[webpack] ${message}`,
  );
}

function failed(message: string) {
  throw new Error(`[webpack] ${message}`);
}

info('single page application under construction');

webpack(config, (error, stats) => {
  if (error ?? stats?.hasErrors()) {
    const message = error?.message ?? stats?.toString();
    failed(`single page application failed to build\n${message}`);
  }
  info('single page application success to build');
});
