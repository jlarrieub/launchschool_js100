// /*---------------------------OBJECTS------------------------------*/
// //////////////////////THEY CAN BE WRITTEN TWO WAYS
// //SEVERAL LINES
// let person1 = {
//   name: 'john',
//   age: 33,
//   hobbies: ['photography', 'geneology']
// };
// //SINGLE LINES
// let person2 = {name: 'jesus', age: 33, hobbies: ['preach', 'save']}
// console.log(person2.hobbies[0])//prints 'preach'
// //////////////////////////ACCESSING KEY VALUE PAIRS
// //1. dot notation
// person1.name //'John'
// //2. bracket notation
// person2['hobbies']//['preach', 'save']
// /////////////////////DELETING KEY VALUE PAIRS
// delete person2.age//will return true
// console.log(person2)//{ name: 'jesus', hobbies: [ 'preach', 'save' ]}

// ////////////////FREEZING OBJECTS
// //You can freeze objects by using Object.freeze
// let person3 = { name: 'Raul', job: 'Data Analist', age: 32, hobbies: [`video games`, 'movies'] };
// Object.freeze(person3)
// person3.name = 'Raulonson'
// console.log(person3)//doesnt cange the object but only works one level
// person3.hobbies[0] = 'language learning'
// console.log(person3)//the object inside has been modified

// Object.freeze(person3.hobbies)
// person3.hobbies[2] = 'jumping jacks'
// console.log(person3)

// /*---------------------------Obj and Prototype Obj----------------*/


// let jean = { name: 'jean', age: 33 };
// let studentJean = Object.create(jean);
// studentJean.year = '1987';
// console.log(studentJean)//{ year: '1987' }
// console.log(studentJean.name)//jean

// /*---------------------------Iterating over Object----------------*/
// //////////////////////FOR/IN LOOP
// //Objects dont have index numbers, it just iterates over every key in object
// let barrilete = { size: 6.25, color: 'multicolor', material: `paper mache` };
// for (const key in barrilete) {
//   console.log(key, barrilete[key]);//bracket notation since key is var
// }

// let barrileteTwo = Object.create(barrilete);
// barrileteTwo.altitude = '1000 meters';
// for (const key in barrileteTwo) {
//   console.log(barrileteTwo[key]);
// }//doesnt limit the properties of barrileteTwo but also barrilete

// ////////////////TO AVOID THIS PROBLEM USE .hasOwnProperty

// for (const key in barrileteTwo) {
//   if (barrileteTwo.hasOwnProperty(key)) {
//     console.log(key, barrileteTwo[key])
//   }
// }//only prints 1000 meters

// //////////////////////RETURNING OBJECT KEYS AS ARRAY
// let jurassic = { type: 'dinasour', age: 2000, era: 'Mezasoic' };
// let jurassicKeys = Object.keys(jurassic);//[type, age, era]
// jurassicKeys.forEach(key => {
//   console.log(jurassic[key]);
// })//dinasour, 2000, Mezasoic

// //////////////////////RETURNING OBJECT VALUES AS ARRAY
// let suits = { type: 'show', year: 2008, era: 'ugly haircuts' };
// let newSuits = Object.values(suits);
// console.log(newSuits);

// ///////////////////ASSIGNING TWO OBJECTS INTO ANOTHER
// //remember to leave empy object or it will also morf first object
// let suitsAndDinasours = Object.assign({}, jurassic, suits);
// suitsAndDinasours.common = 'both of tv';
// console.log(suitsAndDinasours)

// ///////////////////TRANSFORMING OBJECTS INTO NESTED ARRAYS
// let nestedArray = Object.entries(suitsAndDinasours)
// console.log(nestedArray)

/*---------------------------EXERCISES------------------------------*/
// // 1. Given the following code, how can you access the name of the person?
// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };
// //person.name or person['name']

// // 2.Which of the following values are valid keys for an object?
// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'
// //all of them, js coerces them into strings

// // 3.Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:
// let myArray = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newObject = Object.keys(obj);
function keysToUpper(newObject) {
  return newObject.map(key => {
    return key.toUpperCase()
  });
}
console.log(keysToUpper(newObject))

// 5.Create a new object named myObj that uses myProtoObj as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

// 6. Which of the following values are primitive values? Which are objects? Which are neither?

// "foo" //primitive
// 3.1415 //primitive
// [ 'a', 'b', 'c' ]//object
// false//primitive
// foo//neither
// function bar() { return "bar"; }//object
// undefined//primitive
// { a: 1, b: 2 }//object

// 7.Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
myObj.qux = 3;
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});//qux
// Snippet 2Copy Code
for (let key in myObj) {
  console.log(key);
}//qux, foo, bar
// Without running this code, can you determine whether these two snippets produce the same output? Why?

// 8.Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.
//The function should let you omit the array of keys argument when calling the function.If you do omit the argument, the function should copy all of the existing keys from the object.
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}
let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

// 9. What does the following program log to the console? Why?
let foo = {
  a: 'hello',
  b: 'world',
};
let qux = 'hello';
function bar(argument1, argument2) {
  argument1.a = 'hi';//reassigned
  argument2 = 'hi';//cant get reassigned
}
bar(foo, qux);
console.log(foo.a);//hi
console.log(qux);//hello


// // 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.
// // objects 4
// [1, 2, ["a", ["b", false]], null, {}]
// ["a", ["b", false]]
// ["b", false]
// { }
// //primitives 6
// [1, 2, ["a", ["b", false]], null, {}]

// 11. Write some code to replace the value 6 in the following object with 606:
let obj1 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj1.bar[3].xyz = 606;
console.log(obj1)
