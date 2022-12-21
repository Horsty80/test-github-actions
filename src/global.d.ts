import { IConfig } from "../config/config";

declare global {
  interface Window {
    myConfig: IConfig;
  }
}

export {};
