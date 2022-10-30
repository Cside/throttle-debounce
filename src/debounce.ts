/* eslint @typescript-eslint/no-explicit-any: 0 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
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
