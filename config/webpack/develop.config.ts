/**
 * @author mango
 * @description webpack develop config
 */

import path from 'path';
import { merge } from 'webpack-merge';
import WebpackBarPlugin from 'webpackbar';
import DotenvWebpackPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Configuration } from 'webpack';

import { dirname } from '@config';
import common from '@config/webpack/common.config';
import * as rules from '@config/webpack/common.config.rules';

const DOT_ENV = "config/env/development.env";

const config: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
    }),
    new DotenvWebpackPlugin({
      path: path.resolve(dirname, DOT_ENV),
    }),
    new ReactRefreshWebpackPlugin(),
    new ForkTSCheckerWebpackPlugin(),
    new WebpackBarPlugin(),
  ],
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
