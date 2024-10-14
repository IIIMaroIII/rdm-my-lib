import { CustomArrayMethods } from "./interfaces/CustomArratMethods";

declare global {
  interface Array<T> extends CustomArrayMethods<T> {}
}

export {};
