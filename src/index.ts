export const throttle = (fn: (...args: any[]) => void, wait: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  return (...args: any[]) => {
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

export const debounce = (fn: (...args: any[]) => void, wait: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  return (...args: any[]) => {
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