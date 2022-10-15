import debounce from './debounce';
import throttle from './throttle';

for (const obj of [
  { name: 'throttle', func: throttle },
  { name: 'debounce', func: debounce },
]) {
  const { name, func } = obj;
  describe(name, () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    describe('basic', () => {
      it('called decreased times', () => {
        const mockedFn = jest.fn();
        const fn = func(mockedFn, 0);
        fn();
        fn();

        jest.runAllTimers();
        expect(mockedFn).toBeCalledTimes(1);
      });
      it('called with args', () => {
        for (const args of [[], ['a'], ['a', 'b']]) {
          const mockedFn = jest.fn();
          const fn = func(mockedFn, 0);
          fn(...args);

          jest.runAllTimers();
          expect(mockedFn).toHaveBeenCalledWith(...args);
        }
      });
    });

    describe('resolve/reject', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });
      afterEach(() => {
        jest.runAllTimers();
      });
      it('resolves in sync fn', () => {
        expect.assertions(1);

        const mockedFn = jest.fn(() => 'resolve');
        const fn = func(mockedFn, 0);
        expect(fn()).resolves.toBe('resolve');
      });
      it('resolves in async fn', () => {
        const mockedFn = jest.fn(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('resolve');
            }, 0);
          });
        });
        const fn = func(mockedFn, 0);

        if (name === 'throttle') {
          expect.assertions(2);
          expect(fn()).resolves.toBe('resolve');
          expect(fn()).resolves.toBe(null);
        } else {
          // 最初の call は clearTimeout されるので resolve されない
          expect.assertions(1);
          fn();
          expect(fn()).resolves.toBe('resolve');
        }
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
        const fn = func(mockedFn, 0);
        expect(fn()).rejects.toBe('reject');
      });
    });
  });
}
