// 1. What values do the following expressions evaluate to?
// false || (true && false); //false
// true || (1 + 2); //true
// (1 + 2) || true; //3
// true && (1 + 2); //3
// false && (1 + 2); //false
// (1 + 2) && true; //true
// (32 * 4) >= 129; //false
// false !== !true; //false
// true === 4; //false
// false === (847 === '847'); //true
// false === (847 == '847'); //false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
// //false or (false or true) or false // true

// 2. Write a function, evenOrOdd, that determines whether its argument is an even number.
// If it is, the function should log 'even' to the console;
// otherwise, it should log 'odd'.
// For now, assume that the argument is always an integer.

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log('It is even');
//   } else {
//     console.log('It is odd');
//   }
// }
// evenOrOdd(5);

// // 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
// // Hint
// // You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.

// function evenOrOdd(number) {
//   if (!(Number.isInteger(number))) {
//     console.log('Sorry we need an whole number');
//     return;
//   } if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }
// evenOrOdd(4);

// 4.What does the following code log to the console, and why?
// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }
// barCodeScanner('113');
//logs  product2 product3 and product not found

// // 5.Refactor this statement to use an if statement instead.
// // return foo() ? 'bar' : qux();

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// // 6.What does this code output to the console?
// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }
// isArrayEmpty([]);
// //it has property of 0 so it isnt empty

// // 7.Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

// function isString(string) {
//   if (string.length > 10) {
//     console.log(string.toUpperCase());
//   } else {
//     console.log(string);
//   }
// }
// isString('hello world');

// 8.Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

// function numberRange(number) {
//   if (number <= 50 && number > 0) {
//     console.log(`${number} is between 0 and 50`);
//   } else if (number > 51 && number <= 100) {
//     console.log(`${number} is between 51 and 100`);
//   } else if (number > 100) {
//     console.log(`${number} greater than 100`);
//   } else if (number <= 0) {
//     console.log(`${number} is less than 0`);
//   }
// }
// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

//other way of writing it:

// function numberRange(number) {
//   if (number < 0) {
//     console.log(`${number} is less than 0`);
//   } else if (number <= 50) {
//     console.log(`${number} is between 0 and 50`);
//   } else if (number <= 100) {
//     console.log(`${number} is between 51 than 100`);
//   } else {
//     console.log(`${number} is greater than 100`);
//   }
// }
// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

/*----------------------SECOND ATTEMPT--------------------------*/
// 1. What values do the following expressions evaluate to?
// false || (true && false); //true
// true || (1 + 2);//true
// (1 + 2) || true;//3
// true && (1 + 2);//3
// false && (1 + 2);//false
// (1 + 2) && true;//true
// (32 * 4) >= 129;//false
// false !== !true;//false
// true === 4;//false
// false === (847 === '847');//true
// false === (847 == '847');//false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// (false) or true or false //true

// // 2.Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log(`odd`);
//   }
// }
// evenOrOdd(3);

// 3.Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
// function evenOrOdd(number) {
//   if (!Number.isInteger(number)) {
//     console.log(`This is an error`);
//   } else {
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log(`odd`);
//     }
//   }
// }
// evenOrOdd(2)

// // 4. What does the following code log to the console, and why?
// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }
// barCodeScanner('113');//console.logs everything after 113

// // 5. Refactor this statement to use an if statement instead.
// // return foo() ? 'bar' : qux();
//   if (foo()) {
//     return 'bar';
//   } else {
//     return qux();
//   }

// //6.What does this code output to the console?
// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }
// isArrayEmpty([]);//not empty

// // 7.Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
// function isLongerThanTen(string) {
//   if (string.length > 10) {
//     return string.toUpperCase();
//   } else {
//     return string;
//   }
// }
// console.log(isLongerThanTen(`Hello The`))

// //8.Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

// function numberRange(number) {
//   if (number > 100) {
//     console.log(`${number} is greater than 100`)
//   } else if (number > 50) {
//     console.log(`${number} is between 51 and 100`)
//   } else if (number >= 0) {
//     console.log(`${number} is between 0 and 50`)
//   } else {
//     console.log(`${number} is less than 0`)
//   }
// }
// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);


