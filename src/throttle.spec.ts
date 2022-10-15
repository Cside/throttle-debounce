import throttle from './throttle';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('...', () => {
  it('called throttled times', () => {
    const mockedFn = jest.fn();
    const fn = throttle(mockedFn, 0);
    fn();
    fn();

    jest.runAllTimers();
    expect(mockedFn).toBeCalledTimes(1);
  });
  it('called with args', () => {
    for (const args of [[], ['a'], ['a', 'b']]) {
      const mockedFn = jest.fn();
      const fn = throttle(mockedFn, 0);
      fn(...args);

      jest.runAllTimers();
      expect(mockedFn).toHaveBeenCalledWith(...args);
    }
  });
});

describe('...', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runAllTimers();
  });
  it('resolves in sync fn', () => {
    expect.assertions(1);

    const mockedFn = jest.fn(() => 'resolve');
    const fn = throttle(mockedFn, 0);
    expect(fn()).resolves.toBe('resolve');
  });
  it('resolves in async fn', () => {
    expect.assertions(1);

    const mockedFn = jest.fn(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolve');
        }, 0);
      });
    });
    const fn = throttle(mockedFn, 0);
    expect(fn()).resolves.toBe('resolve');
  });
  it('rejects in async fn', () => {
    expect.assertions(1);

    const mockedFn = jest.fn(() => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject('reject');
        }, 0);
      });
    });
    const fn = throttle(mockedFn, 0);
    expect(fn()).rejects.toBe('reject');
  });
});
