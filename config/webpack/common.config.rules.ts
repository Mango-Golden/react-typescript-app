/**
 * @author mango
 * @description webpack loader
 */

import path from 'path';
import type { LoaderContext, RuleSetRule, RuleSetUseItem } from 'webpack';

import { dirname } from '@config';

const LoaderLess: RuleSetUseItem = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
};

const LoaderCss: RuleSetUseItem = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    modules: {
      exportLocalsConvention: 'camelCaseOnly',
      auto: (resource: string) => {
        const relative = path.relative(dirname, resource);
        const isGlobal = resource.endsWith('.global.scss');
        const isModules = relative.startsWith('node_modules');
        return !isGlobal && !isModules;
      },
      mode: (resource: string) => {
        if (/pure.(sa|sc|c)ss$/i.test(resource)) return 'pure';
        if (/global.(sa|sc|c)ss$/i.test(resource)) return 'global';
        return 'local';
      },
      getLocalIdent: (
        context: LoaderContext<unknown>,
        _: string,
        name: string,
      ) => {
        const { resourcePath } = context;
        const relative = path.relative(dirname, resourcePath);
        const { dir, name: filename } = path.parse(relative);
        const prefix = dir.split(path.sep).join('_');
        return `${prefix}_${filename}_${name}`;
      },
    },
  },
};

export const SassRule: RuleSetRule = {
  test: /\.(sa|sc|c)ss$/,
  use: ['style-loader', LoaderCss, 'sass-loader'],
};

export const LessRule: RuleSetRule = {
  test: /\.less?$/,
  use: ['style-loader', LoaderCss, LoaderLess],
};

export const SVGRule: RuleSetRule = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx$/,
  use: [{ loader: '@svgr/webpack', options: { icon: true } }],
};

export const AssetsRule: RuleSetRule = {
  test: /\.(png|jpe?g|gif|webp)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      outputPath: 'static',
      name: '[name].[ext]',
    },
  }],
};

export const TSRule: RuleSetRule = {
  test: /\.(m?js|tsx?|jsx?)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
    cacheDirectory: true,
  },
};
