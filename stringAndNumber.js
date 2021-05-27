// String

const string = "this is a string";
// console.log(string.toUpperCase()); //convert this string from lowercase to uppercase
// console.log(string.indexOf('a')); // find the index of 'a'
// console.log(string.lastIndexOf('is')); // find the index of 'a'
// console.log(string.split(' ')); //divide with space
// console.log(string.length); //find the length of the string


const s_prim = 'foo';
const s_obj = new String(s_prim);

// console.log(typeof s_prim);
// console.log(typeof s_obj);

const s1 = '2+2';
const s2 = new String('2+2');
// console.log(eval(s1))
// console.log(eval(s2))
// console.log(eval(s2.valueOf()));

const name = 'Bangladesh';
// console.log(name.indexOf('desh')); // it will return index number if match otherwise will return -1

// Number

const number1 = 10;
let number2 = '12.5';
number2 = parseFloat(number2);
// console.log(number1 + number2);

const a = 0.1;
const b = 0.2;
let total = a + b;
total = total.toFixed(3);
// console.log(total);



// Math object in javascript

const number = -5;
const absoluteNumber = Math.abs(number); //convert to absolute number
// console.log(absoluteNumber);

const c = 2.35;
// console.log(Math.round(c)); // convert to a integer number

const d = 2.2;
const value = Math.round(Math.random(d) * 100);
console.log(Math.ceil(d)); // convert to next integer number
console.log(Math.floor(d)); // convert to previous integer number
console.log(value); // return a random number from 0 to 1