"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = void 0;
function throttle(fn, wait) {
  let timerId = null;
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (timerId !== null) {
        return resolve(null);
      }
      timerId = setTimeout(() => {
        timerId = null;
        try {
          resolve(fn(...args));
        } catch (error) {
          reject(error);
        }
      }, wait);
    });
  };
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map