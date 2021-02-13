/*----------------------FLOW CONTROL---------------------*/
///////////////CONDITIONAL STATEMENTS WITH COMPARISON OPERATORS
let a = 4;

if (a === 4) {
  console.log(`Its ${a}`)
} else if (a === 3) {
  console.log(`Its ${a}`);
} else {
  console.log(`Its not 3 or 4`)
}
/////////////DIFFERENT IF STATEMENTS
x = 4;
if (x === 3) { 
  console.log(3);
}
if (x === 3) { console.log(3) };
if (x === 3) console.log(3);
if (x === 3)
  console.log(3);
///////////////IF ELSE IF ELSE STATEMENT
if (x === 3) {
  console.log(`x is 3`);
} else {
  if (x === 4) {
    console.log(`x is 4`);
  } else {
    console.log(`x is neither 3 nor 4`);
  }
}

/*----------------------COMPARISON OPERATORS---------------------*/
//////////////////////STRICTLY EQUAL
true === true;//true
true === false//false
4 === 4; //true
4 === '4'; //false
//////////////////////LOOSELY EQUAL OR NON-STRICT EQUALITY OPERATOR
4 == '4';//TRUE
4 == 4;//TRUE
///////////////////STRICT INEQUALITY OPERATOR
4 !== '4'; //true
4 !== 4;//false
////////////////LOOSE INEQUALITY OP OR NONSTRICT INEQUALITY OP
4 != 4;//false
4 != '4';//false
'4' != '420'; //true
//////////////LESS THAN OPERATOR
5 < 6;//TRUE
'4' < '5'; //TRUE
'42' < '40'//FALSE
'42' < '420'//TRUE
'42' < 420//TRUE
///////////GREATER THAN COMPARISON OPERATOR
//SAME
////////GREATER THAN OR EQUAL COMPARISON OPERATOR
5 >= 5; //TRUE
5 >= 6;//FALSE
'53' >= '5200000'; //TRUE
/////////LESS THAN OR EQUAL COMPARISON OPERATOR
//SAME

/////////////////THE NOT OPERATOR
/*----------------------LOGICAL OPERATORS---------------------*/
!true//FALSE
!5//FALSE
!(5 === 4);//FALSE
!(5 === 5);//TRUE
!(5 !== 5);//FALSE
//////////////////AND LOGICAL OPERATOR
true && true;//true
true && false//false
// (5 === 5) && (5 === 5)//true
// (5 === 5) && (4 === 5)//false
///////////////////OR LOGICAL OPERATOR
true || false;//true
false || true;//true
false || false//false

/*----------------------TRUTHYNESS AND FALSINESS------------------*/
//TRUTHINESS ARE ALL THE VALUES THAT COERCE TO TRUE
//Eg
//all numbers that arent 0
//strings
//true
//variables
//FALSINESS ARE ALL THE THE VALUES THAT JS COERCES INTO TRUE
//Eg
//the three types of 0: 0, -0, 0n(Big int);
//false
//""empty string
//NaN
//undefined
//null

////////////////////////LOGICAL OPERATORS SHORT CIRCUIT EVALUATION RETURN THE TRUTHY VALUE INSTEAD OF BOOLEAN VALUES
///////////////with && logical operator
3 && 'foo';//foo, last operand
0 && 3//0, was the last evaluated operand
'foo' && 0;//0 was the last evaluated operand
///////////////with || logical operator
3 || 'foo'//3 is last evaluated operand
0 || 'foo'//'foo' last evaluated operand
'foo' || 0;//'foo', last evaluated operand
0 || ''//'', last evaluated operand

//////////////////////RETURNING VALUES EXAMPLES
//a confusing way of using truthy values
let foo = null;
let bar = 'Bar'; 
let isOk = foo || bar; //truthy value gets set to 'Bar'
console.log(isOk)//logs 'Bar'
///////////////using ternary expression is better
let isNewOk = (foo || bar) ? true : false;
console.log(isNewOk);//returns true
/////////////////the best way to return values is !!2 consec. not operators
let isLastOk = !!(foo || bar);//!! coerces into truthy values
console.log(isLastOk)//true

/*----------------------OPERATOR PROCEDENCE------------------*/
//JS has a set of procedence rules to evaluate expressions
//this is the order of the list, HIGHEST TO LOWEST
//COMPARISON OPERATORS <,>,<=,>=
//EQUALITY OPERATORS ===, ==, !==, !=
//LOGICAL OPERATOR &&
//LOGICAL OPERATOR ||
// ((true || false) && true)//evaluates or first
//////////////////////JUMPING THE PROCEDENCE ORDER WITH PAR()
// ((((true || false) && true) === true) >= true)

/*----------------------TERNARY OPERATORS------------------*/
//they are operators that take in 3 expressions or operands
//the first operand is a comparison, the second is an expression
//the third is another expression (else)
let ifTrue = ('' || true) ? true : false;
console.log(ifTrue)//this is true
//its an expression so you can treat it as a variable or argument
function doFalse(trueOrFalse, ifFalse) {
  trueOrFalse = ifFalse
  return trueOrFalse;
}
ifTrue = doFalse(ifTrue, false)
console.log(ifTrue)//false

/*----------------------SWITCH STATEMENT------------------*/
//similar to an if stetement but compares a single value against multiple values for strict equality ====
let z = 5;
switch (z) {
  case 5:
    console.log(`a is 5`);
    break;
  case 4:
    console.log(`a is 4`);
    break;
  case 3:
    console.log(`a is 3`);
    break;
  default:
    console.log(`a is not 5 or 4 or 3`);
    break;
}
//you can let it run into a group of values and compare instead of an individual value by not using the break statement
let dance = 'tango';
switch (dance) {
  case 'ballet':
  case 'salsa':
  case 'merengue':
  case 'tango':
    console.log(`I found tango`);
    break;
  default:
    console.log(`I didnt find tango`);
}

