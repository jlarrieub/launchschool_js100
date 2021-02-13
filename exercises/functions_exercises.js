

/*---------------------SECOND TRY---------------------*/
// //1.What does this code log to the console? Does executing the foo function affect the output? Why or why not?
// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);
// //NO IT DOESNT BECAUSE THEY ARE DIFFERENT BARS

// //2.In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

// //create function
// //solicit first name in function
// //solicit second name in function
// //function returns names as trings
// //console.log outside to greet user with full name

// function fullNameGreeter () {
//   let rlSync = require(`readline-sync`);
//   let firstName = rlSync.question(`What is your first name?\n`);
//   let lastName = rlSync.question(`What is your last name?\n`);
//   return `${firstName} ${lastName}`;
// }
// let greetName = (fullNameGreeter());
// console.log(`Well hello, ${greetName}`);

// //3.Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// function multiply (prompt) {
//   let rlSync = require(`readline-sync`);
//   let number = parseFloat(rlSync.question(prompt));
//   return number;
// }

// function numbers(firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// }

// let firstNumber = multiply(`Enter first number:\n`);
// let secondNumber = multiply(`Enter second number:\n`);
// console.log(`${firstNumber} * ${secondNumber} = ${numbers(firstNumber, secondNumber)} `)

// //4.What does the following code log to the console?
// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }
// scream('Yipeee');//it doesnt return anything

// //5.What does the following code log to the console?
// function scream(words) {
//   return words + '!!!!';
// }
// scream('Yipeee');//nothing, it returns words!!! but doesnt log

