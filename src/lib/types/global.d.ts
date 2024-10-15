import { CustomArrayMethods } from './CustomArraytMethods';

declare global {
  interface Array<T> extends CustomArrayMethods<T> {}
}

export {};
