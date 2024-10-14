declare global {
  interface Array<T> extends CustomArrayMethods<T> {}
}

export {};
