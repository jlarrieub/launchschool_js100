// // 1.
// // console.log(`You are ${age} years old.`);
// // console.log(`In 10 years, you will be ${age + 10} years old.`);
// // console.log(`In 20 years, you will be ${age + 20} years old.`);
// // console.log(`In 30 years, you will be ${age + 30} years old.`);
// // console.log(`In 40 years, you will be ${age + 40} years old.`);

// let rlSync = require(`readline-sync`);
// let age = Number(rlSync.question(`How old are you?\n`));
// console.log(`Im ${age} years old`)
// for (let future = 10; future <= 40; future += 10) {
//   console.log(`In ${future} You will be ${age + future}`)
// }

// 2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
// 1!	1	1
// 2!	1 * 2	2
// 3!	1 * 2 * 3	6
// 4!	1 * 2 * 3 * 4	24
// 5!	1 * 2 * 3 * 4 * 5	120
// Use a loop of some kind to solve this. Don't use recursion; we'll do that later.
// You may assume that the argument is always a positive integer.
// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// // adding until you arrive at the integer
// function factorial(integer) {
//   let factorial = 1
//   for (let counter = 1; counter <= integer; counter += 1) {
//     factorial = factorial * counter
//   }
//   return factorial;
// }
// console.log(factorial(4))

// //subtracting until you arrive at counter is less than 1
// function factorial(number) {
//   let result = 1
// for (let counter = number; counter > 0; counter -= 1) {
//   result = result * counter;
// }
//   return result;
// }
// console.log(factorial(4))

// // 5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

//  do {
//    result = randomNumberBetween(1, 5)
//    console.log(result)
//   tries += 1;
// } while (result <= 2);

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// 6.Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.
// function factorial(integer) {
  
//   if (integer <= 1) {
//     return 1;
//   } else {
//     return integer * factorial(integer - 1);
//   }

// }
// console.log(factorial(4))


// function doubler(number) {
//   console.log(number)
//   if (number <= 50) {
//     doubler(number * 2);
    
//   }
// }
// console.log(doubler(2))

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(22, 10);

// function brendanEichQuote() {
//   console.log('Always bet on JavaScript.');
// }
// brendanEichQuote();

// function cite(arg1, arg2) {
//   console.log(`${arg1} said: "${arg2}"`);
// }
// cite('Brendan Eich', 'Always bet on JavaScript.');

// function squaredNumber(number) {
//   return number ** 2;
// }
// squaredNumber(3);

// function comparedByLength(str1, str2) {
//   if (str1.length < str2.length) {
//     return -1;
//   } else if (str1.length > str2.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(comparedByLength('patience', 'perseverance'));
// console.log(comparedByLength('strength', 'dignity'));
// console.log(comparedByLength('humor', 'grace'));

// let sentenceOne = 'Captain Ruby';
// console.log(sentenceOne.replace('Ruby', 'Javascript'));


// function returnGreeting(isoCode) {
//   switch (isoCode) {
//     case 'en':
//       return 'Hi!';
//     case 'fr':
//       return 'Salut';
//     default:
//       return 'Not and isoCode';
//   }
// }
// console.log(returnGreeting('en'));


// function localGreet(code) {
//   let greet = code.substr(3, 2);
//   switch (greet) {
//     case 'US': return 'Hey';
//     case 'GB': return 'Hello';
//     case 'AU': return 'Howdy';
//     case 'FR': return 'Salut!';
//   }
// }

// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));
// console.log(localGreet('fr_FR.UTF-8'));

// function greet(greeting = 'Hello ') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!
//                       // should log: Hello, world!

// function greet(greeting = 'Hello', location = 'world') {
//   console.log(`${greeting}, ${location}!`);
// }                      
// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(greeting() + ', ' + recipient() + '!')
// }    
// greet();

// function calculateBMI(height, weightInKilograms) {
//   let heightInMeters = height / 100;
//   let bmi = weightInKilograms / heightInMeters ** 2;
//   return String(bmi.toFixed(2));
// }
// console.log(calculateBMI(180, 80));

// function catAge(humanYears) {
//   if (humanYears === 0) {
//     console.log(0)
//   } else if (humanYears === 1) {
//     console.log(15);
//   } else if (humanYears === 2) {
//     console.log(24);
//   } else if (humanYears > 2) {
//     humanYears -= 2;
//     console.log(24 + (humanYears * 4))
//   }
// }
// catAge(4);

// function removeLastChar(lastCharacter) {
//   console.log(lastCharacter.slice(0, -1));
// }
// removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell'

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => template
//   .replace('VERB', verb)
//   .replace('NOUN', noun);

// console.log(sentence('like', 'birds'));

// let initGame = () => {
//   let game = initGame();
//   return {
//     game.level: 1,
//     game.score: 0
//   }
// };

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// let a = 1;

// function myFunction() {
//   console.log(a);
// }

// myFunction();

// let string = "These aren't the droids you're looking for.";

// console.log(string.toUpperCase())

// function repeat(n, string) {
//   for (let i = 0; i <= number; i++) {
//     console.log(String(string));
//   }
// }
// console.log(repeat(4, 'hello')); // 'hahaha'

// function repeat(number, string) {
//   let repetitions = '';

//   while (number > 0) {
//     repetitions = repetitions + string;
//     number -= 1;
//   }
//   return repetitions;
// }

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.includes('x', 0));

// function isBlank(string) {
//   return string.trim().length === 0;
// }
// console.log(isBlank(''));   // false


// function first(element) {
//   return element
//     .slice(0)
//   .pop('cat')
// }
// console.log(first(['Earth', 'Moon', 'Mars']));

/*--------------------------SECOND TRY --------------------------*/
// // 1.Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

// // // console.log(`In 10 years, you will be ${age + 10} years old.`);
// // // console.log(`In 20 years, you will be ${age + 20} years old.`);
// // // console.log(`In 30 years, you will be ${age + 30} years old.`);
// // // console.log(`In 40 years, you will be ${age + 40} years old.`);
// let age = 10;
// console.log(`You are ${age} years old.`);
// for (let future = 10; future < 40; future += 10) {
//   console.log(`In ${future} years, you will be ${age + future}`)
// }

// // 2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
// // Use a loop of some kind to solve this. Don't use recursion; we'll do that later.
// function factorial(number) {
//   let newNumber = 1;
//   for (let i = 0; i < number; i += 1) {
//     newNumber = newNumber * (i + 1)
//   }
//   return newNumber;
// }
// console.log(factorial(1));
// // console.log(factorial(1));     // => 1
// // console.log(factorial(2));     // => 2 * 1

// // 3.The following code causes an infinite loop (a loop that never stops iterating). Why?
// let counter = 0;

// while (counter = 1) {//counter is always true
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// // 4. Does the following code produce an error? Why or why not? What output does this code send to the console?
// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }
// //no it has the three components

// // 5.The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.
// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let tries = 0;
// let result; 
// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

function factorial(number) {
  if (number < 2) return number;
  return number * factorial(number - 1);
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
