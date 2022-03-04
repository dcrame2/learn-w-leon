//--- Easy
//create a variable and assign it a number
let x = 20;
//minus 10 from that number
x = x - 10;
//print that number to the console
console.log(x);
//--- Medium
//create a variable that holds a value from the input

// //add 25 to that number
// input = input + 25;
// //alert that number
// alert(input);
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", sum);

function sum() {
  let input = document.querySelector("#danceDanceRevolution").value;
  console.log(x + Number(input));
}
