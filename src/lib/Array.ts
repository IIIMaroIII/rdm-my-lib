Array.prototype.myPush = function (...elements) {
  for (let el of elements) {
    this[this.length] = el;
  }
  return this.length;
};
