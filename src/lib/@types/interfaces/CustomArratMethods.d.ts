export interface CustomArrayMethods<T> {
  myPush(...elements: T[]): number | undefined;
}

export interface CustomObj {
  [key.string]: string;
}
