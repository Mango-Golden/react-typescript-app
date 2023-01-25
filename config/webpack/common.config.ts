/**
 * @author mango
 * @description webpack common config
 */

import fs from 'fs';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

import { version, dirname } from '@config';

const config: Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    clean: true,
    publicPath: '/',
    path: path.resolve(dirname, 'dist/'),
    filename: `${version}/js/[name].js`,
    chunkFilename: `${version}/js/chunk/[name].js`,
  },
  performance: {
    hints: false,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [
        ...fs.readdirSync(__dirname).map((name) => {
          return path.resolve(__dirname, name);
        }),
        path.resolve(dirname, 'package.json'),
        path.resolve(dirname, 'tsconfig.json'),
      ],
    },
  },
  resolve:{
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.wasm',
    ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(dirname, './tsconfig.json'),
      }),
    ],
  },
};

export default config;
