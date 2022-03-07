// *Variables*
// Create a variable and console log the value
const var1 = 12;
// Create a variable, add 10 to it, and alert the value
console.log(var1);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}
// Create a function that divides one number by another and returns the remainder
function divides(num1, num2) {
  return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(num1, num2) {
  let sum = num1 + num2;
  if (sum > 50) {
    alert("Jumanji");
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThreeNums(num1, num2, num3) {
  let divis = num1 * num2 * num3;
  if (divis % 3 === 0) {
    alert("zebra");
  }
}

multThreeNums(3, 2, 1);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopThatShit(word, num) {
  for (let i = 0; i < num; i++) {
    console.log(word);
  }
}

loopThatShit("Dylan", 20);
