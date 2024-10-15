declare global {
  interface Array<T> extends CustomArrayMethods<T> {
    myPush(...elements: T[]): number;
  }
}

export {};
