/*----------------------LOOPS------------------------------*/
//////////////////////WHILE LOOPS
//theyre very useful because they prevent us from repeating ourselves like below
//Eg.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
//instead we can use a while loop, with a conditional expression that should log until 4
let counter = 1;
while (counter <= 4) {
  console.log(counter);
  counter += 1;//modification in order to not create infinite loop
}
//if the loop block doesnt modify the conditional expression it will become an infinite loop
// let infinite = 0;
// while (infinite < 1) {
//   console.log(infinite);
// }

/*----------------------LOOPING OVER ARRAYS-----------------------*/
///one of the most useful ways of using arrays
let dogNames = ['fido', 'lassie', 'manu', 'singa'];
let upperNamesDogsArray = [];
let index = 0;

while (index < dogNames.length) {
  let toUpperNames = dogNames[index].toUpperCase();
  upperNamesDogsArray.push(toUpperNames);
  index += 1;
}
console.log(upperNamesDogsArray);

/*----------------------DO WHILE LOOPS-----------------------*/
///SAME AS WHILE LOOPS BUT THEY ITERATE OVER A LOOP AT LEAST ONCE
let i = 1;
do {
  console.log(i);
} while (i < 1) {
  i += 1;
}//it will log at least once even though the loops conditional says not to

/*----------------------FOR LOOPS-----------------------*/
let catNames = ['Ida', 'Kuwahi', 'Gata'];
let upperCats = [];

for (let index = 0; index < catNames.length; index += 1) {
  let newCats = catNames[index].toLowerCase();
  upperCats.push(newCats);
}
console.log(upperCats);

/*----------------------CONTROLLING LOOPS-----------------------*/
///////////////////////CONTINUE
//CONTINUE LETS YOU SKIP OVER AN ITEM OF AN ARRAY WHEN IT REACHES IT
let number = 10;
for (let i = 0; i <= number; i += 1) {
  if (i === 2) {//it skips 2
    continue;
  }
  console.log(i)
}
///////////////////////BREAK STATEMENT
for (let i = 0; i < 10; i += 1) {
  if (i > 5) break;//stops when 5 is reached
  console.log(i);
}
/////on an array
let stupidNames = ['john', 'paul', 'jones', 'jamison'];
let indexOfJamison = -1;

for (let i = 0; i < stupidNames.length; i += 1) {
  if (stupidNames[i] === 'jamison') {
    indexOfJamison = i;
    break;
  }
}
console.log(indexOfJamison)

/*----------------------CONTROLLING LOOPS WITH METHODS------------*/
//methods can use function expressions as arguments because of first class functions. 
const familyNames = ['luis', 'michel', 'nicole', 'lesley'];
familyNames.forEach(function (names) {
  console.log(names.toUpperCase());
});
familyNames.forEach(names => console.log(names.replace('e', 'i')))

/*----------------------RECURSION-----------------------*/
//a function that can double a number but only once
function doubler(number) {
  console.log(number * 2);
}
doubler(1);
doubler(2);
doubler(3);
doubler(4);

function doubler(number) {
  console.log(number);

  if (number < 10) {
    doubler(number + 2);
  }
}
doubler(1)

function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(6))
