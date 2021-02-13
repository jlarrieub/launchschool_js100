
/*--------------------BASIC SYNTAX FUNCTION---------------------*/
function say(words) { //parameter words
  console.log(words.toUpperCase())//argument words that gets returned
}
say(`Hello`);//argument that gets passed
say(`Hi`);
say(`Hows it going`);

/*--------------------RETURN VALUES----------------------------*/
function add(a, b) {
  return a + b;
}
add(2, 3);//it returns the value to the caller but doesnt log
let addTwoAndThree = (add(2, 3))//capture it in a var
console.log(addTwoAndThree);//log it

//predicates 
function boolean(value) {
  return value === 1;
};
boolean(1);
let numberIsBoolean = boolean(1);
console.log(numberIsBoolean)

/*--------------------DEFAULT PARAMETERS--------------------------*/
function armySalute(words = 'Yes Sargent') {
  return words + '!';
}
armySalute('Sir yes Sir');
armySalute();
let defaultSalute = armySalute();
console.log(defaultSalute);//uses the words default parameter

/*--------------------NESTED FUNCTIONS--------------------------*/
function hey() {
  function there() {
    console.log('hey' + 'there');
  }
  there();
  there()
}
hey()//calls there twice that conosoles heythere

/*--------------------VARIABLE SCOPE--------------------------*/
/////////////////////GLOBAL VARIABLES - its highly discouraged because it can lead to bugs
let greetingMessage = 'Good Morning';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  return greetingMessage = newMessage //reassings to new Message
}
greetPeople();//good morning
changeGreetingMessage('Good Night');//now greetingM is Good Night
greetPeople();//Good Night

//////////////////////LOCAL VARIABLES -cant be accessed outside the function
//function with declared variable inside
function yellOut() {
  let shoutingMessage = 'SCREW YOU BUDDY';
  return shoutingMessage;
}
console.log(yellOut())
// console.log(shoutingMessage);//hasnt been defined

//more flexible, is to initialize variable inside parameters
function yellIn(shoutingMessage) {
  return shoutingMessage;//the function stops running
}
yellIn('Come on!');//now this belongs to the function invoked
let comeOn = yellIn('Come on!');//now it belongs to the variable
console.log(comeOn)

/*--------------------FUNCTIONS VS METHODS-----------------------*/
//methods are functions that get appended values or variables
let string = 'Jesus Christ Super Star';
let stringToUpperCase = string.toUpperCase();
console.log(stringToUpperCase)

/*--------------------MUTATING THE CALLER-----------------------*/
///////////////////////NON MUTATING METHOD
let johnName = 'John Jacob Jingleheimer Schmidt';
johnName.toUpperCase();//converts to uppercase
console.log(johnName);//it doesnt mutate the caller

/////////////////////////MUTATING THE CALLER
let oddNumbers = [1, 3, 5, 7];
oddNumbers.pop();
console.log(oddNumbers);//mutates caller [1, 3, 5, 7]

///////////////////////FUNCTION MUTATING ARGUMENTS
function addLastElement(array) {
  return array[4] = 5 ;
}
let oneToFour = [1, 2, 3, 4];
addLastElement(oneToFour);
console.log(oneToFour);

//////////////////NON DESTRUCTIVE ARRAY FUNCTION
function concatLastElement(array) {
  return array.concat('d')
}
let abcArray = ['a', 'b', 'c'];
console.log(concatLastElement(abcArray));
console.log(abcArray)

/*--------------------FUNCTION COMPOSITION-----------------------*/
//Its when you call a function and pass it to another function

/////////////////// the canonical example
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2))//passing a function call to another function

///////////////////A BETTER EXAMPLE
function times(a, b) {
  return a * b;
}
console.log(times(add(1, 2), add(1, 2)))

/*--------------------FUNCTION DEFINITION-----------------------*/
/*--------------------3 WAYS YOU CAN DEFINE-----------------------*/

////////////////////FUNCTION DECLARATION
//THE TIPICAL WAY OF DECLARING A FUNCTION
function functionName(zeroOrMoreParams) {
  return zeroOrMoreParams;//as arguments
  //function arguments with expressions or statements
}
functionName(`zeroOrMoreArguments`)//function call or invocation

/////////////////////FUNCTION EXPRESSION
let goodMorning = function () {
  console.log(`Good Morning`);
}
goodMorning();
//ANOTHER FUNCTION EXPRESSION
(function chickenTonight() {
  console.log('Good Morning')
});
//YET ANOTHER FUNCTION EXPRESSION (higher order function)
function makeGreeter(name) {
  return function greeter() {//this is a function expression
    console.log(`Hello ${name}`);
  };
}

/////////////////////ARROW FUNCTIONS
let addWords = (firstWord, secondWord) => firstWord + ' '+ secondWord;
console.log(addWords(`hey`, `hi`)) 
//////NO NEED OF RETURN STATEMENT WITH 1 EXPRESSION
let addTwo = (a, b) => a + b;//no return
console.log(addTwo(1, 2));//3

/*--------------------THE CALL STACK----------------------*/
////////////////////////EXAMPLE
function first() {                      //1
  console.log(`first function`);         //2
}                                        //3
                                        //4
function second() {                     //5
  first(); //funct second calls first() //6
  console.log(`second function`);       //7
}                                       //8
                                        //9
second();//stack frame or main function //10
console.log(`main function`)            //11
//1. program execution arrives at line 10, it updates main stack
//2. javascript creates a new stack frame for second() function
//3. now that main function is dormat, function second() is alive
//4.the second function calls first() on line 6
//5.now the second stack updates the second frame to line 6
//6. It creates a new stack frame and pushes function first() to the call stack
//7.Now the function first() starts executing and invokes console.log
//8. since console.log is a function it logs `first function` and returns
//9.javascript removes, or pops the top stack frame of the call stack
//10. the first function returns and gets popped of the stack
//11. the second function resumes, and returns and gets popped of the stack
//12. this gets to the main stack where the main stack resumes, gets popped from the stack and the program ends
