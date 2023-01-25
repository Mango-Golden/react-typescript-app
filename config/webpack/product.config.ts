/**
 * @author mango
 * @description webpack product config
 */

import path from 'path';
import { merge } from 'webpack-merge';
import WebpackBarPlugin from 'webpackbar';
import DotenvWebpackPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';

import { dirname } from '@config';
import common from '@config/webpack/common.config';
import * as rules from '@config/webpack/common.config.rules';

const DOT_ENV = "config/env/production.env";

const config: Configuration = {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
    }),
    new DotenvWebpackPlugin({
      path: path.resolve(dirname, DOT_ENV),
    }),
    new WebpackBarPlugin(),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all'
    },
  },
  module: {
    rules: [
      rules.TSRule,
      rules.SassRule,
      rules.LessRule,
      rules.SVGRule,
      rules.AssetsRule,
    ]
  }
};

export default merge(common, config);
