export default (fn: (...args: any[]) => void, wait: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  return (...args: any[]) => {
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