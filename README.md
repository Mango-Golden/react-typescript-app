<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<a href="https://github.com/Mango-Golden/react-typescript-app">
  <img src="./docs/images/icons/logo.svg" alt="Logo" width="32" height="32">
</a>
<h3 align="center">React Typescript App</h3>
<p align="center">
  A modern web react app with typescript
</p>
</div>

## About The Project

### Built With

[![TS][Typescript]][Typescript-url]
[![React][React.js]][React-url]
[![Sass][Style.Sass]][Sass-url]
[![Webpack][Webpack.js]][Webpack-url]
[![Babel][Babel.js]][Babel-url]
[![Eslint][Eslint.js]][Eslint-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Directory

``` markdown
├─assets/ # 静态资源
│     ├─icons/ # 图标
│     ├─favicon.ico
│     └─index.html # 入口页面
├─cli/ # 命令行脚本
│     ├─build.ts # 编译脚本
│     └─dev.server.ts # webpack dev server
├─config/ # 配置文件
│     ├─env/ # 环境变量
│     ├─webpack/ # webapck config
│     │     ├─common.config.rules.ts/ # Loader 配置
│     │     └─common.config.ts # webpack 通用配置
│     └─index.ts # 项目通用配置
├─docs/ # 项目文档
├─src/
│     ├─components/ # 组件
│     ├─constants/ # 常量
│     │     └─enums/ # 枚举
│     │           └─system.ts # 应用枚举
│     ├─hooks/ # react-hooks
│     ├─models/ # 类型、模型、接口定义
│     ├─pages/ # 页面
│     ├─routers/ # 路由
│     ├─service/ # fetch封装(提供中间件)
│     │     └─middlewares/ # 中间件
│     ├─styles/ # 公共样式
│     │     └─themes/ # 动态主题
│     ├─app.tsx
│     ├─index.tsx # 入口文件
│     └─initial.tsx # 项目初始化、环境变量校验
├─test/ # 单元测试
├─types/
│     ├─css.module.d.ts # css module type define
│     ├─environment.d.ts # dotenv variable type define
│     └─media.module.d.ts # file-loader type define
├─utils/ # 工具方法
│     ├─error.ts # 自定义Error
│     └─types.ts # typescript 工具类
├─.babelrc # babel配置
├─.eslintignore           
├─.gitignore
├─.npmrc # npm 镜像配置
├─.nvmrc # node 版本配置 (nvm/fnm)
├─.yarnrc # yarn 镜像配置
├─CHANGELOG.md
├─global.d.ts
├─package.json
├─tsconfig.json
└─vitest.config.json # 测试框架配置
```

### Prerequisites

> Note: Use NPM intranet mirror

* yarn
  ```sh
  $ npm i yarn -g
  ```

### Installation

1. CLI will auto Use NPM intranet mirror
2. Clone the repo
   ```sh
   git clone
   ```
3. Install NPM packages
   ```sh
   yarn
   ```

### Development

1. run local server (support hot replace)
```sh
  yarn dev
```

### Build

1. run build script

```sh
  yarn build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Version 1
  - [x] Project init
- [ ] Version 2

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Rebase develop to your Branch (`git rebase origin develop`)
5. Push to the Branch (`git push origin feature/AmazingFeature -f`)
6. Open a Merge/Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Owner: mango
<br/>
Project Link: [GitHub](https://github.com/Mango-Golden/react-typescript-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[React.js]: ./docs/images/icons/react.svg
[React-url]: https://reactjs.org/
[Typescript]: ./docs/images/icons/typescript.svg
[Typescript-url]: https://www.typescriptlang.org/
[Style.Sass]: ./docs/images/icons/sass.svg
[Sass-url]: https://www.sass.hk/
[Antd.tsx]: ./docs/images/icons/antd.svg
[Antd-url]: https://ant.design/index-cn
[Webpack.js]: ./docs/images/icons/webpack.svg
[Webpack-url]: https://webpack.js.org/
[Babel.js]: ./docs/images/icons/babel.svg
[Babel-url]: https://babeljs.io/
[SvgR.js]: ./docs/images/icons/svgr.svg
[SvgR-url]: https://react-svgr.com/
[Eslint.js]: ./docs/images/icons/eslint.svg
[Eslint-url]: https://eslint.cn/
