export default (fn: (...args: any[]) => void, wait: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  return (...args: any[]) => {
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
