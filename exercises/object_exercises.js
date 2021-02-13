// // 1. Given the following code, how can you access the name of the person ?
// // let person = {
// //   name:       'Bob',
// //   occupation: 'web developer',
// //   hobbies:    'painting',
// // };
// console.log(person.name);
// console.log(person["name"]);

// // 2. Which of the following values are valid keys for an object?
// // 1
// // '1'
// // undefined
// // 'hello world'
// // true
// // 'true'
// all are valid but they will be turned into strings

// // 3.Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }//you cant use methods and if you modify object, it wont continue to change length

// // 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// let newArray = Object.keys(obj);
// let upperKeys = newArray.map(item => item.toUpperCase());
// console.log(upperKeys)

// // 5. Create a new object named myObj that uses myProtoObj as its prototype.

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// //answer
// let myObj = Object.create(myProtoObj);
// console.log(myObj.foo)

// // 6. Which of the following values are primitive values? Which are objects? Which are neither?

// "foo" //primitive
// 3.1415 //primitive
// [ 'a', 'b', 'c' ] //object
// false //primitive
// foo //neither
// function bar() { return "bar"; } //object
// undefined //primitive
// { a: 1, b: 2 } //object

// // 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;
// console.log(myObj)


// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });//only prints its own keys, not the prototype

// for (let key in myObj) {
//   console.log(key);
// }//prints all keys, including prototype

// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key)
//   }//this prints only its own key
// }

// // 8.Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// // The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

// // Here are some examples for your reference:

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(objToCopy, arrayOfKeys) {
//   let destinationObject = {};
 
//   if (arrayOfKeys) {
//     arrayOfKeys.forEach(key => destinationObject[key] = objToCopy[key])
//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, objToCopy)
//   }
// } 

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// // 9. What does the following program log to the console? Why?


// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

// // 11. Write some code to replace the value 6 in the following object with 606:

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };
// obj['bar'][3]['xyz'] = 606;
// obj['qux'][1] = 2;
// console.log(obj)
