/**
 * @author mango
 * @description webpack-dev-server
 */

import path from 'path';
import webpack from 'webpack';
import Server from 'webpack-dev-server';
import type { Configuration } from 'webpack-dev-server';

import { dirname } from '@config';
import config from '@config/webpack/develop.config';

const options: Configuration = {
  port: 8080,
  https: false,
  compress: true,
  host: '0.0.0.0',
  allowedHosts: 'all',
  historyApiFallback: true,
  watchFiles: [
    path.resolve(dirname, 'tsconfig.json'),
    path.resolve(dirname, 'config/webpack/common.config.ts'),
  ],

  server: { type: 'http' },
  static: path.resolve(dirname, 'assets'),
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const compiler = webpack(config);

const server = new Server(options, compiler);

process.once('exit', () => {
  server.close();
});

server.start();
