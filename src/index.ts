import { a } from './a';

// https://stackoverflow.com/questions/40640663/strictnullchecks-and-getelementbyid
// The ! means "trust me, this is not a null reference" 😂
const ele = document.querySelector('#root')!;

ele.innerHTML = a;

console.log('ts nb');
