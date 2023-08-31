import { BusinessEnvironment } from '../feature-toggle';

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BUSINESS_ENV: BusinessEnvironment;
    }
  }
}
