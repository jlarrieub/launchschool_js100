
// /*----------------------ARRAYS-----------------------------------*/
// //arrays are ordered lists of elements that can be primitive or complex types
// let myArray = ['joey', 'rachel', 'monica', 'ross', 'chandler'];
// //you can access arrays with the length method and also see the last number of the indexed array element
// console.log(myArray.length);

// //getting the last element indexed in the array
// console.log(myArray[myArray.length - 1])

// /*-----------------------MODIFYING ARRAYS-------------------------*/
// ///////////////////REPLACING AND ADDING ELEMENTS
// ////REPLACING METHOD AND ADDING METHOD
// let oneToThree = [1, 2, 3];
// oneToThree[3] = 4;//adds new element at the end
// oneToThree[0] = 5;//replaces element in 0 index
// console.log(oneToThree);//[5, 2, 3, 4]

// ////////////////ADDING ELEMENT WITH LENGTH PROPERTY
// let threeToSix = [3, 4, 5, 6];
// threeToSix[threeToSix.length] = 7;
// console.log(threeToSix);//[ 3, 4, 5, 6, 7 ]

// ////////////////PUSH METHOD ON AN ARRAY
// let pushMe = [1, 2, 3, 4, 5];
// pushMe.push(6, null, false);//adding different values
// console.log(pushMe)//mutates array[ 1, 2, 3, 4, 5, 6 ]

// ///////////////STOPPING MODIFICATION OF ARRAY WITH FREEZE METHOD
// const tresCochinitos = [1, 2, 3];
// Object.freeze(tresCochinitos);
// tresCochinitos[1] = 5;
// console.log(tresCochinitos)//cant modify it
// //Stopping modificication done inside a nested array
// const seisCochinitos = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])]);
// seisCochinitos[3][2] = `no more cohinito`;//doesnt get modified
// console.log(seisCochinitos);//[ 1, 2, 3, [ 4, 5, 6 ] ]

// ////ADDING ELEMENTS WITH CONCAT
// let concatArray = [10, 9, 7, 6];
// concatArray.concat(5)
// console.log(concatArray)//it doesnt mutate the caller

// /////REMOVING ELEMENTS WITH POP
// let popArray = [`first`, 'middle', 'last'];
// popArray.pop();
// console.log(popArray);//deletes and mutates caller

// ///REMOVING ANY ELEMENTS INSIDE ARRAY
// let spliceArray = [`john`, 'ringo', 'paul', 'george'];
// spliceArray.splice('ringo', 'paul');
// // console.log(spliceArray)//doesnt mutate the caller

// //ITERATIONS WITH forEech,
// //for each calls the callback function for each element of the array
// spliceArray.forEach((element, index) => {
//   if (index > 0) {
//     console.log(index);
//   }
//   if (element !== 'john') {
//     console.log(element);
//   }
// });
// /////////////////////TRANSFORMING ARRAYS
// //////////////WITH FOR EACH
// let myAddress = ['5ta', 'av', '8-75'];
// let newAdress = []
// myAddress.forEach(direction => newAdress.push(direction.toUpperCase()));
// console.log(newAdress);
// //////////////THE PROBLEM WITH FOREACH
// ////////if you repeat the process it will keep on adding to newArray
// myAddress.forEach(direction => newAdress.push(direction.toUpperCase()));
// console.log(newAdress)//it adds by two [ '5TA', 'AV', '8-75', '5TA', 'AV', '8-75' ]

// ////////////////THE MAP METHOD IS BETTER IF CREATING NEW ARRAYS
// let airlines = ['avianca', 'american', 'continental', 'iberia'];
// let capitalizedAirlines = airlines.map(names => names.toUpperCase());
// capitalizedAirlines = airlines.map(names => names.toUpperCase());
// console.log(capitalizedAirlines)//doesnt print out twice

// ///////////////FILTERING OUT INFORMATION WITH FILTER
// let fastFood = [1, 2, 3];
// let newFastFood = fastFood.filter(names => names > 1);
// console.log(newFastFood);//non mutative

// //////////////////////BUILDING NEW VALUES WITH REDUCE
// let chickenShop = ['KFC', 'Pollo Campero', 'Pollo Pinulito', 'Pollo Brujo'];
// let allChickenShops = chickenShop.reduce((Accumulator, shopName) => Accumulator + ", " + shopName.toUpperCase());
// console.log(allChickenShops);


// let numbers = [10, 9, 8, 6, 5];
// let substraction = numbers.reduce((Accumulator, number) => Accumulator - number, 0); 
// console.log(substraction)

// /*---------------------ARRAYS CAN BE ODD-------------------------*/

// ///////////////INDEX NUMBER AND LENGTH
// let indexNumber = [1, 2, 3, 4, 5];
// console.log(indexNumber.length)//youd expect 4 but it prints 5 

// ///////////////KNOWING IF AN ARRAY IS AN ARRAY
// let arr = [1, 2, 3];
// console.log(typeof arr); //will print object since its an object
// ///for better information
// console.log(Array.isArray(arr));//prints true if its an array

// /////////////////////MAKING EMPTY ARRAYS STRANGE
// let arr2 = [];
// arr2.length = 3
// console.log(arr2);//[ <3 empty items> ]

// arr2[0];
// console.log(arr2)

// let arr3 = arr2.filter(element => element === undefined)
// console.log(arr3)//[]

// arr2.forEach(element => console.log(element))//no input

// arr2[1] = 3;
// console.log(arr2);

// arr2.forEach(element => console.log(element));//3
// Object.keys(arr2);//['1']//it brings them as strings

// ///////////ARRAYS CAN HAVE INDEX VALUES EVEN WITHOUT REAL INDEX NUMS
// //TRANSFORMS THE KEYS OR PROPERTIES INTO INDEXES
// let arrIndex = [1, 2, 3];
// arrIndex[-3] = 4;
// arrIndex[3.1415] = 'pi';
// arrIndex['cat'] = 'fluffy';
// console.log(arrIndex)//[ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'fluffy' ]
// console.log(Object.keys(arrIndex))//[ '0', '1', '2', '-3', '3.1415', 'cat' ]

// //////////////////////UNSET VALUES IN ARRAYS
// let a = new Array(3);
// console.log(a);//[ <3 empty items> ]
// console.log(a[0] === undefined);//true
// console.log(a.length)//3
// let aKeys = Object.keys(a);
// console.log(aKeys.length)//0

// let b = [];
// b.length = 3;
// console.log(b)// [ <3 empty items> ]
// console.log(b[0] === undefined);
// console.log(b.length)//3
// let bKeys = Object.keys(b);
// console.log(bKeys.length)//0

// let c = [undefined, undefined, undefined];
// console.log(c);//[ undefined, undefined, undefined,]
// let keysC = Object.keys(c);
// console.log(c.length)//3
// console.log(keysC.length)//3

// /*----------------------------ARRAY EQUALITY---------------------*/
// let equalArray = [1, 2, 3] === [1, 2, 3];
// console.log(equalArray)//false because they arent the same array

// let arrayA = [1, 2, 3];
// let arrayB = arrayA;
// arrayA[3] = 4;
// console.log(arrayB)//same array so it modifies the second array

// ///////////COMPARING THE ARRAY ELEMENTS OF 2 ARRAYS
// function arraysEqual(array1, array2) {
//   if (array1.length !== array2.length) return false;

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// }
// console.log(arraysEqual([1, 2, 3], [1, 2, 3]))//true
// console.log(arraysEqual([1, 2, 3], [4, 5, 6]))//false diffrent elem
// console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]))//false diff length
// console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]))//doesnt work with nested arrays

// /*----------------------------OTHER ARRAY METHODS-----------------*/
// //////////////the INCLUDES METHOD to check if one element is in the array
// let arrZ = ['apple', 'banana', 'orange']
// console.log(arrZ.includes('apple', 'banana'));//true
// console.log(arrZ.includes('a'));//false
// let weirdFruits = ['tomatoe', 'pineapple']; 
// arrZ[3] = weirdFruits;
// console.log(arrZ)//[ 'apple', 'banana', 'orange', [ 'tomatoe', 'pineapple' ] ]
// console.log(arrZ.includes(['tomatoe', 'pineapple']))//cant check nest
// console.log(arrZ.includes(weirdFruits))//true checks array

// ///////////////the SORT METHOD sorts arrays and mutates the caller

// let sortNumbers = [3, 5, 7, 1, 2];
// sortNumbers.sort();
// sortNumbers.sort();//doesnt mutate once more
// console.log(sortNumbers)

// ///////////////////////SLICE METHOD to extract from array
// ///////////////////NON DESTRUCTIVE
// let veggies = ['cucumber', 'lettuce', 'coliflower', 'carrot'];
// console.log(veggies.slice(0, 1))
// console.log(veggies.slice(0, 2))
// console.log(veggies.slice(1, 3))
// console.log(veggies.splice(1, 2))
// console.log(veggies.splice(0))//doesnt let the original mutate


// /////////////////////////REVERSE METHOD MUTATES
// sortNumbers = [3, 5, 7, 1, 2, [3, 5, 8]];
// veggies = ['cucumber', 'lettuce', 'coliflower', 'carrot'];
// sortNumbers.sort()
// sortNumbers.sort((a, b) => a - b);
// console.log(sortNumbers)//[ 1, 2, 3, [ 3, 5, 8 ], 5, 7 ] will sort inside arrays

// ////////////////REVERSE METHOD IS DESTRUCTIVE unless you use slice
// let alphabetLetters = ['z', 'y', 'x', 'w', 'v', 'u'];
// let goodAlphabel = alphabetLetters.slice()//doesnt mutate alphabet
// goodAlphabel.reverse();
// console.log(goodAlphabel)
// console.log(alphabetLetters)


/*----------------------------ARRAY EXERCISE---------------------*/
// // 1.In the following code, what are the final length values for array1, array2, array3, array4, and array5?
// let array1 = [1, 2, undefined, 4];//4

// let array2 = [1];
// array2.length = 5;//5

// let array3 = [];
// array3[-1] = [1];//NOT TAKEN INTO ACOUNT

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3;//3

// let array5 = [];
// array5[100] = 3;//101

// // 2.Log all of the even values from myArray to the console.
// let meArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];
// let evenArray = meArray.filter(number => {
//   return number % 2 === 0;
// })
// console.log(evenArray)

// // 3.Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

// let nestedArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// nestedArray.map(number => {
//   for (let index = 0; index < number.length; index += 1) {
//     if (number[index] % 2 === 0) {
//       console.log(number[index])
//     }

//   }
// })

// // 4.Let's try another variation on the even-numbers theme. We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.
// let evenAndOddArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
// let truthOrDare = evenAndOddArray.map(element => {
//   if (element % 2 === 1) {
//     return `odd`;
//   } else {
//     return `even`;
//   }
// })
// console.log(truthOrDare)

// 5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.
// function findIntegers(array) {
//   return array.filter(element => {
//     if (Number.isInteger(element)) {
//       return element
//     }
//   });
// } 
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

// // 6.Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// function OddLength(array) {
//   let newArray = array.map(elements => elements.length);
//   return newArray.filter(number => {
//     return number % 2 === 1;
//   }
//   )
// }
// console.log(OddLength(arr))

// // 7.Use reduce to compute the sum of the squares of all of the numbers in an array:
// let array = [3, 5, 7];
// function sumOfSquares(numbers) {
//   return numbers.reduce((accumulator, number) => accumulator + (number * number), 0);
// }
// console.log(sumOfSquares(array)); // => 83

// 8.This problem is more challenging than most in this book. Don't worry if you can't solve it on your own
// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
//couldnt solve

// 9.Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
function checkNumbers(array) {
    if (array.includes(3)) {
      console.log(true)
    } else {
      console.log(false)
    }
}
numbers1 = [1, 3, 5, 7, 9, 11];
numbers2 = [];
numbers3 = [2, 4, 6, 8];
checkNumbers(numbers1)
checkNumbers(numbers2)
checkNumbers(numbers3)

// 10.Write some code to replace the value 6 in the following array with 606:
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;
console.log(arr)
