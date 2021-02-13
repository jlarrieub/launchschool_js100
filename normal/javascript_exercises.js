// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }
// console.log(`Launch!`)

// // Write a loop that logs greeting three times.
// let greeting = 'Aloha!';
// for (i = 0; i < 100; i++) {
//     console.log(i * 2)
//   }

// // 3.Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index])
//   index += 1;
// }

// // 4.Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (index = 0; index < cities.length; index += 1) {
//   if (cities[index] === null) {
//     continue;
//   } else {
//     console.log(cities[index])
//   }
// }

// 5.The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

// for (let i = 0; ; i += 1) {
  // console.log("and on");
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log("and on");
// }

// let i = 1;
// while (i < 40) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i += 1;
// }


// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (index = 0; index < fish.length; index += 1) {
//   if (fish[index] === 'Bruce') {
//     break;
//   } else {
//     console.log(fish[index])
//   }
// }

/*-----------------------CONDITIONALS---------------------------*/
// 1.Without looking at your notes or MDN, try to recall all values that count as falsy in JavaScript.
// false
// 0,-0,
// Null
// undefined
// NaN
// ""//right

// // 2.The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed. Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.
// let randomNumber = Math.round(Math.random());
// if (randomNumber === 1) {
//   console.log(`Yes`);
// } else {
//   console.log(`No`);
// }

// // 3. Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.
// let newRandom = (randomNumber === 1) ? console.log(`Yes`) : console.log(`No`);

// // 4.Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

// // Write an if statement that logs:

// // "It's a beautiful day!" if weather is assigned to the string "sunny",
// // "Grab your umbrella." if weather is assigned to the string "rainy", and
// // "Let's stay inside." otherwise.
// // Test your code with different values for weather.

// let weather = 'rainy';

// if (weather === 'sunny') {
//   console.log('Its a beautiful day');
// } else if (weather === 'rainy') {
//   console.log(`Grab your umbrella`);
// } else {
//   console.log(`Lets stay inside`);
// }

// 4.Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.
// let animal = 'horse';
// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }//neigh, tweet tweet, cricket because theres no continue;

// // 5.Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
// let weather = 'cloudy';
// switch (weather) {
//   case 'sunny':
//     console.log(`Its sunny`);
//     break;
//   case 'cloudy':
//     console.log(`Its cloudy`);
//     break;
//   default:
//     console.log(`Its neither`);
//     break;
// }

// // 6. Predict the output of the following code:
// if (false || true) {
//   console.log('Yes!');
// } else {
//   console.log('No...');
// }//yes because the last truthy value is true

// // 7.Predict the output of the following code:
// if (true && false) {
//   console.log('Yes!');
// } else {
//   console.log('No...');
// }//no because the last truthy value is false

// // 8. Without running the below code, determine what will be logged to the console.
// let sale = true;
// let admissionPrice = !sale ? 5.25 : 3.99;

// console.log('$' + admissionPrice);//3.99

// // 9.Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.
// let speed = 0;
// let acceleration = 24;
// let brakingForce = 19;

// let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
// console.log(isMoving);//true

/*-----------------------FUNCTIONS 1---------------------------*/
// // 1. Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(22, 10); // 32

// // 2.Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?

// function brendanEichQuote() {
//   console.log('Always bet on JavaScript.')
// }
// brendanEichQuote();
// // logs:
// // Always bet on JavaScript.//return value undefined

// // 3.Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.

// function cite(author, quote) {
//   console.log(`${author} said: ${quote}`)
// }
// cite('Brendan Eich', 'Always bet on JavaScript.');
// // logs:
// // Brendan Eich said: "Always bet on JavaScript."

// // 4.Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).
// function squaredNumber(number) {
//   console.log(number ** 2);
// }
// squaredNumber(3); // 9

// // 5. Determine the output that the following code will log to the console.
// function multiplesOfThree() {
//   let divisor = 1;
//   for (let dividend = 3; dividend <= 30; dividend += 3) {
//     console.log(dividend + ' / ' + divisor + ' = 3');
//     divisor += 1;
//   }
// }
// multiplesOfThree();//3, 6, 9, 12

// // 6. Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:
// function compareByLength(str1, str2) {
//   if (str1.length < str2.length) {
//     console.log(-1);
//   } else if (str1.length > str2.length) {
//     console.log(1);
//   } else {
//     console.log(0)
//   }
// }
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

// // 7. Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

// function changeString(string) {
//   let newWord = string.split(' ')
//   newWord[1] = `Javascript`
//   let newNewWord = newWord.join(' ')
//   console.log(newNewWord)
// }
// changeString(`Captain Ruby`)

// // 8.Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.
// function greet(iso) {
//   switch (iso) {
//     case 'en':
//       console.log(`Hi`)
//       break;
//     case 'fr':
//       console.log(`Salut`);
//       break;
//   }
// }
// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'

// // 9.Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.
// function extractLanguage(uft8) {
//   console.log(uft8.substring(0, 2));
// }
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'

// 10.Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:
// function extractRegion(uft8) {
//     console.log(uft8.substring(3, 5));
//   }
// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'

// function greet(iso) {
//   let hello = iso.substring(0, 5);
//   switch (hello) {
//     case 'en_US':
//       console.log(`Hey`)
//       break;
//     case 'en_GB':
//       console.log(`Hello`);
//       break;
//     case 'fr_FR':
//       console.log(`Salut`);
//       break;
//   }
// }
// greet('en_US.UTF-8');
// greet('en_GB.UTF-8'); // 'Salut!'
// greet('fr_FR.UTF-8');

/*-----------------------VARIABLE SCOPE---------------------------*/
// // 1.What will the following code log to the console and why? Don't run it until you have tried to answer.
// console.log(greeting);
// var greeting = 'Hello world!';//UNDEFINED

// // 2.What will the following code log to the console and why? Don't run it until you have tried to answer.
// if (true) {
//   let myValue = 20;
// }
// console.log(myValue);//ERROR myValue is not defined

// // 3.What will the following code log to the console and why? Don't run it until you have tried to answer.
// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//   }
// }
// myFunction();//logs 1

// // 4.What will the following code log to the console and why? Don't run it until you have tried to answer.
// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }
// myFunction();//2 it was error a hast been initialized

// 5.What will the following code log to the console and why? Don't run it until you have tried to answer.
// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }
// console.log(b);//logs false

// // 6.What will the following code log to the console and why? Don't run it until you have tried to answer.
// let a = 1;
// function myFunction() {
//   console.log(a);
// }
// myFunction();//1

// // 7.What will the following code log to the console and why? Don't run it until you have tried to answer.
// let a = 1;
// function myFunction(a) {
//   console.log(a);
// }
// let b = 2;
// myFunction(b);//2

// // 8.What will the following code log to the console and why? Don't run it until you have tried to answer.
// const a = 1;
// function myFunction() {
//   a = 2;
// }
// myFunction(a);//assignment to constant variable

// 9.What will the following code log to the console and why? Don't run it until you have tried to answer.
// const a = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// function myFunction() {
//   a.firstName = 'Jane';
// }

// myFunction();

// console.log(a);//jane doe

/*-----------------------STRINGS---------------------------*/
// // 1. Determine the length of the string "These aren't the droids you're looking for.".
// let one = "These aren't the droids you're looking for.";
// console.log(one.length)

// // 2. Take the string 'confetti floating everywhere' and transform it to upper case.

// let string = 'confetti floating everywhere';
// console.log(string.toUpperCase())


// // 3.Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().
// function repeat(times, word) {
//   let repetitions = '';
//   while (times > 0) {
//     repetitions += word;
//     times -= 1;
//   }
//   console.log(repetitions)
//   }
// repeat(3, 'ha'); // 'hahaha'
function DIDNTGETITRIGHT1() { }

// //4.Take the following rhyme:
// let rhyme = `A pirate I was meant to be!\n
// Trim the sails and roam the sea!`

// // 5. Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

// function compareString(str1, str2) {
//   let strA = str1.toLowerCase()
//   let strB = str2.toLowerCase()

//   if (strA === strB) {
//     console.log(`theyre the same`)
//   } else {
//     console.log(`theyre different`)
//   }
// }
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';
// compareString(string1, string3)

// // 6.Write code that checks whether the string byteSequence contains the character x.
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.match('x'))

// // 7. Write a function that checks whether a string is empty or not. For example:
// function isBlank(string) {
//   if (string === '') {
//     console.log(true);
//   } else {
//     console.log(false)
//   }
// }
// isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

// // 8.Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:
// function isBlank(string) {
//   if (string === '') {
//     console.log(true);
//   } else if (!string.trim()) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// isBlank('mars'); // false
// isBlank('  ');   // true
// isBlank('');     // true

// // 9.Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

// function capitalizeString(string) {
//   let array = string.split(' ')
//   let newString = array.map(key => {
//     return key.substring(0, 1).toUpperCase() + key.slice(1)
//   })
//   return newString.join(' ')
// }
// console.log(capitalizeString('launch school tech & talk'))

/*-----------------------ARRAYS---------------------------*/
// // 1. Write a function that returns the first element of an input array. For example:
// function first(array) {
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] === array[0]) {
//       console.log(array[0])
//     } 
//   }
// }
// first(['']); // 'Earth'

// // 2. Write a function that returns the last element of an input array. For example:
// function last(array) {
//   console.log(array[array.length - 1])
// }
// last(['Earth', 'Moon', 'Mars']); // 'Mars'

// // 3.We are given the following array of energy sources.
// // Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.slice()
// energy[energy.length] = 'geothermal'
// console.log(energy)

// // 4.Split the string alphabet into an array of characters.

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let newAlphabet = alphabet.split('')
// console.log(newAlphabet)

// // 5.Count the number of elements in scores that are 100 or above.
// let scores = [96, 47, 113, 89, 100, 102];
// function above100(array) {
//   return array.filter(key => key >= 100)
// }
// console.log(above100(scores))

// // 6.We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// function ArrayInsideArray(vocabulary) {
//   for (let i = 0; i < vocabulary.length; i += 1) {
//     let vocabInside = vocabulary[i];
//     for (let x = 0; x < vocabInside.length; x += 1) {
//       console.log(vocabInside[x])
//     }
//   }
// }
// console.log(ArrayInsideArray(vocabulary))

// // 7.Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);//false, they point to different memory

// 8. How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

// function filter(input) {
//   // Is input an array?
// }//Array.isArray()

// // 9.The destinations array contains a list of travel destinations.

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome','Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];
// // Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

// // For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.
// function contains(city, destinations) {
//   for (i = 0; i < destinations.length; i += 1) {
//     if (destinations[i] === city) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false

// // 10.We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// function newPasscode(passcode) {
//   return passcode.join('-')
// }
// console.log(newPasscode(passcode))

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// // 11. Checking items off the grocery list
// // We have made a grocery list, and as we check off items on that list, we would like to remove them.
// // Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
//   for (i = 0; i < groceryList.length; i += 1){
//     console.log(groceryList[i]);
//   }
// while (groceryList.length > 0) {
//   console.log(groceryList.pop())
// }
//   console.log(groceryList)

/*-----------------------FUNCTIONS 2----------------------*/
// // 1.How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?
// function greet(greeting = 'Hello ') {
//   console.log(greeting + ', world!');
// }
// greet('Salutations'); // logs: Salutations, world!
// greet();              // logs: undefined, world!
//                       // should log: Hello, world!

// // 2. Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

// function greet(greeting = 'Hello', place = 'world') {
//   console.log(greeting + ', ' + place + '!');
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// // 3. Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.
// function greeting() {
//   return 'Good morning';
// }
// function recipient() {
//   return 'Launch School';
// }
// function greet() {
//   return (`${greeting()}, ${recipient()}!`)
// }
// console.log(greet())

// // 4. Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:
// // Return the result as a string rounded to two decimals. For example:
// // bmi = weightInKilograms / heightInMeters**2;
// // Note that formular requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

// function calculateBMI(heightInCentimeters, weightInKilograms) {
//   let heightInMeters = heightInCentimeters / 100
//   let bmi = parseFloat(weightInKilograms / (heightInMeters ** 2)).toFixed(2);
//   console.log(`${bmi}`)
// }
// calculateBMI(180, 80); // "24.69"

// // 5. Calculate Cat Age
// // Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:
// // The first human year corresponds to 15 cat years.
// // The second human year corresponds to 9 cat years.
// // Every subsequent human year corresponds to 4 cat years.
// // For example:
// catAge(0); // 0
// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32  
// function catAge(years) {
//   let humanYears = 4;
//   if (years === 0) {
//     console.log(0);
//   } else if (years === 1) {
//     console.log(15);
//   } else if (years === 2) {
//     console.log(24);
//   } else if (years > 2) {
//     console.log(24 + ((years - 2) * 4))
//   }
// }

// // 6. Create a function removeLastChar that takes a string as argument, and returns the string without the last character
// function removeLastChar(string) {
//   console.log(string.split('').splice(0, 4).join(''))
// }
// removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell'

// 7. Refactor the function below using arrow syntax. Line 9 should still log the same sentence.
// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// console.log(sentence('like', 'birds'));
// // logs: I like birds.

// // 8.The function initGame below returns an object. Refactor it using arrow function syntax.
// let initGame = () => ({
//     level: 1,
//     score: 0
//   });
// let game = initGame();
// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

/*----------------------OBJECTS----------------------*/
// // 1. Write the code necessary to retrieve the value of the courses property of our student object.
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };
// console.log(student.courses)

// // 2. Given the below object jane, write code that retrieves the country in which Jane is located.
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };
// console.log(jane.location.country)

// // 3.Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };
// fido.age = 4;
// fido['favorite food'] = 'dog chow'
// console.log(fido);
// // Add property 'age'.
// // Add property 'favorite food'.

// // 4.Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: (name) => `Hej, ${name}!`,
// };

// console.log(jane.greet('Bobby')); // Hej, Bobby!

// // 5.Before running any code, determine what difference there will be in the output of the two code snippets below (if any).
// // Snippet 1:
// let ocean = {};
// let prefix = 'Indian';
// ocean.prefix = 'Pacific';
// console.log(ocean); // prefix: pacific
// // Snippet 2:
// let ocean = {};
// let prefix = 'Indian';
// ocean[prefix] = 'Pacific';
// console.log(ocean); // Indian: Pacific

// // 6. We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }///because true is a string not a boolean

// // 7.Write code that stores all of the vehicle property names in an array called keys.
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };
// let vehicleProperties = Object.keys(vehicle);
// console.log(vehicleProperties)

// // 8.Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };
// let nestedArray = Object.entries(person)
// console.log(nestedArray)
// // Expected output:
// // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// // 9. Write code that does the reverse, starting from a nested array of pairs and building an object.
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let nestedObject = {}
// for (let i = 0; i < nestedArray.length; i++) {
//   let pair = nestedArray[i]
//   nestedObject[pair[0]] = pair[1]
// }
// console.log(nestedObject)

// // Expected output:
// // { title: 'Duke', name: 'Nukem', age: 33 }
let DIDNTGETITRIGHT9;

// 10.Write a function clone that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same key/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.
function clone(obj) {
  return Object.assign({}, person);
  
 }

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

// let abed = { name: 'Abed', age: 23, };
// let superAbed = Object.create(abed);
// superAbed.year = 'Senior';

// console.log(superAbed.name);// logs 'Abed'
// console.log(superAbed)//logs only year: Senior because its
// //not defined by the abed prototype
