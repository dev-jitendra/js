let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));

/**
 * let score = "33"-> 33
 * let score = "33abc"-> NaN
 * let score = null-> 0
 * let score = undefined -> NaN
 * let score = true -> 1
 * let score = false -> 0
 */


// With Boolean Values
let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/**
 * let isLoggedIn = 1 -> true
 * let isLoggedIn = 0 -> false
 * let isLoggedIn = "Narendra" -> true
 * let isLoggedIn = "" -> false
 */


//With String Values
let someNumber = 36;

let convertString = String(someNumber);
console.table([convertString,typeof convertString]);


// *************************  Operations  *************************

let value = 3;
let negValue = -value
console.log(negValue);  //-3


console.table([(2+2), (2-2), (2*2), (2**2), (2/2), (2%2)]);
/**
 * console.log(2+2) -> 4
 * console.log(2-2) -> 0
 * console.log(2*2) -> 4
 * console.log(2**2) -> 4
 * console.log(2/2) -> 1
 * console.log(2%2) -> 0
 */

let str1 = "hello";
let str2 = " Narendra";
let str3 = str1 + str2;
console.log(str3);


console.table([("1" + 2), (1 + "2"), ("1" + "2"), ("1" + 2 + 2), (1 + 2 + "2"), (1 + "2" + 2)]);
/**
 * 
 * console.log("1" + 2), -> 12
 * console.log(1 + "2"), -> 12 
 * console.log("1" + "2"), -> 12 
 * console.log("1" + 2 + 2), ->122
 * console.log(1 + 2 + "2"), -> 32
 * console.log(1 + "2" + 2), ->122
 * 
 */

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.table(["gamecounter++ =>", gameCounter,
"++gameCounter = ", gameCounter]);
/**
console.log(true);  -> true
console.log(+true); -> 1
console.log(+"");   -> 0
 */