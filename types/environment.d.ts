declare enum AppEnv {
  Dev = "development",
  Prod = "production",
}

declare namespace NodeJS {
  interface ProcessEnv {
    __APP_ENV__: AppEnv;

    __APP_CONTAINER__: string;
  }
}
