Array.prototype.myPush = function (...elements) {
  for (let element in elements) {
    this[this.length] = element;
  }

  return this.length;
};

export const MyArray = {
  myPush: Array.prototype.myPush,
};
