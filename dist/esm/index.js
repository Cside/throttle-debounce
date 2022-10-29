var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/


const throttle = (fn, wait) => {
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
};
exports.throttle = throttle;
const debounce = (fn, wait) => {
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
};
exports.debounce = debounce;
})();

var __webpack_exports__debounce = __webpack_exports__.debounce;
var __webpack_exports__throttle = __webpack_exports__.throttle;
export { __webpack_exports__debounce as debounce, __webpack_exports__throttle as throttle };

//# sourceMappingURL=index.js.map