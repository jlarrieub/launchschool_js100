
/*------------------METHOD CHAINING---------------------------*/
// let string = 'John Adams'
// let names = string.toLowerCase().split(' ').reverse().join(', ')
// console.log(names);

/*------------------REGEX / regular exp.---------------------------*/
// //testing if string has a letter
// console.log(/o/.test('bobcat')); //true
// console.log(/z/.test('bobcat')); //false

// //performing operations like if else statement
// if (/o/.test('bobcat')) {
//   //this branch executes since b is in bobcat
//   console.log('Yes, it contains the letter b');
// } else {
//   console.log('No, it doesnt contain the letter b');
// }

// //using match method
// let matchMethod = 'bobcat'.match(/x/);
// console.log(matchMethod)//null or no match

// let secondMatch = 'bobcat'.match(/[bct]/g);
// console.log(secondMatch)//Global match

// let thirdMatch = 'bobcat'.match(/b((o)b)/)
// console.log(thirdMatch)//singular match

// //using match in a function
// function has_n_or_g(string) {
//   let results = string.match(/[ng]/g);
//   if (results) {
//     console.log(`We have a match! ${results}`);
//   } else {
//     console.log(`We dont have a match`)
//   }
// }
// has_n_or_g('skydiving');
// has_n_or_g('go');
// has_n_or_g('john');
// has_n_or_g('parameter')

/*------------------MATH OBJECT---------------------------*/
// //SQUARE ROOT
// console.log(Math.sqrt(2));

// //PI
// console.log(Math.PI);

// //Returns smallest integer greater than number
// console.log(Math.ceil(2.31244));

// //Returns largerst integer less than the number
// console.log(Math.floor(2.31244));

/*------------------DATES-----------------------------------*/
// //DETERMENING DAY OF THE WEEK WITH NUMBERS
// let date = new Date(`November 22, 1987`);
// date.getDay();
// console.log(date.getDay());//0, starts on sunday

// //GETTING DAY OF THE WEEK WITH NAMES
// function getDayOfTheWeek(date) {
//   let daysOfTheWeek = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   return daysOfTheWeek[date.getDay()];
// }
// let myBirthday = new Date(`November 22, 1987`);
// console.log(getDayOfTheWeek(myBirthday))

/*------------------EXCEPTIONS----------------------------------*/
// let names = ['bob', 'joe', 'steve', undefined, 'frank'];
// // names.forEach(name => {
// //   console.log(`${name}'s name has ${name.length} letters in it.`);
// // }); // => bob's name has 3 letters in it.
// //     //    joe's name has 3 letters in it.
// //     //    steve's name has 5 letters in it.
// //     //    TypeError: Cannot read property 'length' of undefined
// //     //        at names.forEach (repl:2:42)
// //     //        at Array.forEach (<anonymous>)
// names.forEach(name => {
//   try {
//     console.log(`${name}'s has ${name.length} letters in it.`)
//   } catch (undefined) {
//     console.log(`Something went wrong`)
//   }
// });

/*------------------EXERCISES----------------------------------*/
// // 3. Write some code to output the square root of 37.
// let squareRoot = Math.sqrt(37)
// console.log(squareRoot)

// // 4.Given a list of numbers, write some code to find and display the largest numeric value in the list.
// // 1, 6, 3, 2	
// // -1, -6, -3, -2	
// // 2, 2	
// console.log(Math.max(1, 6, 3, 2));
// console.log(Math.max(-1, -6, -3, -2));
// console.log(Math.max(2, 2));

// // 5.What does the following function do?
  
// function doSomething(string) {
//   return string.split(' ')
//     .reverse()
//     .map((value) => value.length);
// }

// console.log(doSomething('hey youre supermegacool'))
// //answer:
// //it turns the string into an array, reverses the array, and counts the array length of each index value

// // 6.Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.
// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// function allMatches(words, regex) {
//   let matches = [];
//   for (let index = 0; index < words.length; index += 1) {
//     if (regex.test(words[index])) {
//       matches.push(words[index])
//     }
//   }
//   return matches;
// }
// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// let y = '5';
// y++;
// console.log(y)


// let puppies = ['Jefferson','Alexander','Hamilton'];
// let bannerPuppies = [];
// let index = 0;

// while (index < puppies.length) {
// 	let upperCaseName = puppies[index].toUpperCase();
// 	bannerPuppies.push(upperCaseName)
// 	index += 1;
// }
// console.log(bannerPuppies);


/*--------------------------------TAKE TWO----------------*/
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
function allMatches(words, regex) {
  return words.filter(key => {
    if ((key.match(regex))) {
      return key;
    } else {
      return;
    }
  });
}
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function isNotANumber(value) {
  if (value !== NaN) {
    console.log(true);
  } else {
    console.log(false)
  }
}
// isNotANumber(NaN)

function isNegativeZero(number) {
  if ((2/number) === Infinity) {
    console.log(false);
  } else {
    console.log(true);
  }
}
isNegativeZero(-0)
