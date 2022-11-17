"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;
function debounce(fn, wait) {
  let timerId = null;
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        try {
          resolve(fn(...args));
        } catch (error) {
          reject(error);
        }
      }, wait);
    });
  };
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map