export default (fn, wait) => {
    let timerId = null;
    return (...args) => {
        return new Promise((resolve) => {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                resolve(fn(...args));
            }, wait);
        });
    };
};
