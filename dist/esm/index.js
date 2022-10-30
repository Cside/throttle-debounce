/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
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
var __webpack_exports__debounce = __webpack_exports__.debounce;
var __webpack_exports__throttle = __webpack_exports__.throttle;
export { __webpack_exports__debounce as debounce, __webpack_exports__throttle as throttle };

//# sourceMappingURL=index.js.map