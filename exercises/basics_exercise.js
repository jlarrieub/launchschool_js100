// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

//answer
// let name = `Jean` + ` Larrieu`;
// console.log(name);

// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

//answer
// let numbers = 4936;
// let ones = numbers % 10;
// console.log(ones);

// numbers = (numbers - ones) / 10;
// let tens = numbers % 10;
// console.log(tens);

// numbers = (numbers - tens) / 10
// let hundreds = numbers % 10;
// console.log(hundreds);

// numbers = (numbers - hundreds) / 10;
// let thousands = numbers % 10;
// console.log(thousands);

// 3. Identify the data type for each of the following values:

// 'true' - string
// false - boolean
// 1.5 - number
// 2 - number
// undefined - undefined
// { foo: 'bar' } - object

// 4.Explain why this code logs '510' instead of 15.
// console.log('5' + 10);

// first number is actually a string

// 5.Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

// console.log(Number('5') + 10);

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.

// console.log(`The value of 5 + 10 is ${Number(5) + 10}`);

// 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
// let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?

// undefined

// 8. Create an array named names that contains a list of pet names. For instance:
// asta
// butterscotch
// pudding
// neptune
// darwin

// let petNames = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
// console.log(petNames[2]); //pudding

// 9. Create an object named pets that contains a list of pet names and the type of animal. For instance:
// asta	dog
// butterscotch	cat
// pudding	cat
// neptune	fish
// darwin	lizard

// let pets = {
//   asta: 'dog',
//   butterscotch: 'cat',
//   pudding: 'cat',
//   neptune: 'fish',
//   darwin: 'lizard',
// }

// console.log(pets['asta']);

// 10. What value does the following expression evaluate to?
// 'foo' === 'Foo'

// false

// 11. What value does the following expression evaluate to?
// parseInt('3.1415')

// 3 it doesnt continue after the dot in integers

// 12. What value does the following expression evaluate to?
// '12' < '9'

//true, although the strings arent the same, it determines that '1' < '9' so '12' must be less than '9'
