import { debounce, throttle } from '../dist/mjs/m';
const ret = debounce(1, 2);
console.log([throttle, debounce]);
