"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.throttle = void 0;
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
                }
                catch (error) {
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
                }
                catch (error) {
                    reject(error);
                }
            }, wait);
        });
    };
};
exports.debounce = debounce;
//# sourceMappingURL=index.js.map