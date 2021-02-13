// 1. Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:
// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.

// solution:
// let firstName = 'Victor';

// console.log(`Good Morning, ${firstName}.`);
// console.log(`Good Afternoon, ${firstName}.`);
// console.log(`Good Evening, ${firstName}.`);

// 2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.
// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

// solution:
// let age = 20;

// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 10 years, you will be ${age + 20} years old.`);
// console.log(`In 10 years, you will be ${age + 30} years old.`);
// console.log(`In 10 years, you will be ${age + 40} years old.`);

// 3. What happens when you run the following program? Why do we get that result?
// {
//   let foo = 'bar';
// }
// console.log(foo);

// solution: it wont run because the variable foo is out of scope

// 4. What happens when you run the following code? Why?
// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// solution: itll crash after running victor because its const

// 5. Take a look at this code snippet:What does this program log to the console? Why?
// let foo = 'bar';
// {
//   let foo = 'qux';
// }
// console.log(foo);

//solution: bar, because the foo=qux is out of scope

// 6. Will this program produce an error when run? Why or why not?
// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }
// console.log(FOO);

//no, the constant is out of scope. so foo = bar
