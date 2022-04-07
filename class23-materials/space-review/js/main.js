//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr = [1, 2, 3, 10];

const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArr(arr) {
  return arr.map((x) => x * x);
}
console.log(squaredArr([1, 2, 3, 4]));
//Create a function that takes string
//Print the reverse of that string to the console
let uno = (str) => console.log(str.split("").reverse().join(""));
console.log(uno("hello"));
//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palCheck = (str) => console.log(str === str.split("").reverse().join(""));
palCheck("hannah");
