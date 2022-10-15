const debounce = (fn: (...args: any[]) => void, wait: number) => {
  let timerId: number | null = null;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      fn(...args);
    }, wait);
  };
};
