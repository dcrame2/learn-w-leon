// *Variables*
// Declare a variable, assign it a value, and alert the value
// const aVariable = 19;
// alert(aVariable);

// Create a variable, divide it by 10, and console log the value
// const x = 2;
// console.log(x / 20);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplysThreeeNums(num1, num2, num3) {
  alert(num1 * num2 * num3);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesFourNums(num1, num2, num3, num4) {
  let add = num1 + num2;
  let sub = num3 - num4;
  console.log(add, sub);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// function takesInThreeNums(num1, num2, num3) {
//   let num = (100 + num1 - num2) / num3;
//   if (num > 25) {
//     console.log("WE HAVE A WINNA");
//   }
// }
// takesInThreeNums(1, 300, 1);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function takesInDay(day) {
//   const dayOfWeek = day.toLowerCase();
//   if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
//     alert("weekend");
//   } else {
//     alert("week day");
//   }
// }
// takesInDay("Monday");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loopy(num) {
  for (let i = 0; i < num; i += 3) {
    console.log(i);
  }
}

loopy(100);
