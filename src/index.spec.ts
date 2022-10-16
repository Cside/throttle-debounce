const { debounce, throttle } = require('./index.ts');

for (const obj of [
  { name: 'throttle', func: throttle },
  { name: 'debounce', func: debounce },
]) {
  const { name, func } = obj;
  describe(name, () => {
    describe('basic', () => {
      beforeAll(() => jest.useFakeTimers());
      afterAll(() => jest.useRealTimers());

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
          expect(mockedFn).toHaveBeenLastCalledWith(...args);
        }
      });
    });
    describe('resolve/reject', () => {
      it('resolves in sync fn', () => {
        const fn = func(() => 'resolve', 0);
        return expect(fn()).resolves.toBe('resolve');
      });
      it('resolves in async fn', () => {
        const fn = func(() => Promise.resolve('resolve'), 0);

        if (name === 'throttle') {
          return expect(Promise.all([fn(), fn()])).resolves.toEqual([
            'resolve',
            null,
          ]);
        } else {
          // 最初の call は clearTimeout されるので resolve されない
          fn();
          return expect(fn()).resolves.toBe('resolve');
        }
      });
      it('rejects in async fn', () => {
        const fn = func(() => Promise.reject('reject'), 0);
        return expect(fn()).rejects.toBe('reject');
      });
      it('rejects in throwing fn', () => {
        const fn = func(() => {
          throw 'reject';
        }, 0);
        return expect(fn()).rejects.toBe('reject');
      });
    });
  });
}
