export default (fn, wait) => {
    let timerId = null;
    return (...args) => {
        return new Promise((resolve) => {
            if (timerId !== null) {
                resolve(null);
                return;
            }
            timerId = setTimeout(() => {
                timerId = null;
                resolve(fn(...args));
            }, wait);
        });
    };
};
