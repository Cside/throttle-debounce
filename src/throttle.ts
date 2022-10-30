/* eslint @typescript-eslint/no-explicit-any: 0 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
): (...args: Parameters<T>) => Promise<null | ReturnType<T>> {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
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
