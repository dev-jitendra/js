// Primitive

/**
 * 07 type -> 
    *  String,
    *  Number,
    *  Boolean,
    *  null,
    *  undefined,
    *  Symbol,
    *  BigInt
    *  */

//int
const score = 100;  

//float
const scoreValue = 100.5;   

//bool
const isLoggedIn = false;   

//null
const outsideTemp = null;   

//undefined
let userEmail;  

//symbol
const id = Symbol('123');   

//BigInt
const bigNumber = 6546132131498794321n;     




// Reference (Non primitive)
/**
 * Array,
 * Objects,
 * Functions
 */

//Array
const heros = ["Shaktiman", "Hatim", "Sonpari", "Nagraj"];

// Objects
let sd = {
    name:"Narendra",
    age: 24,
    email:"narendrasinghlodhi10@gmail.com",
    address:"Sagar",
    message:" "
};

//Functions
const myFunction = function(){
    console.log("hello JavaScript!");
}


//Check DataType
console.table([
"score = 100 -> "+ typeof score,
"scoreValue = 100.5 -> " + typeof scoreValue,
"isLoggedIn = false -> " + typeof isLoggedIn,
"outsideTemp = null -> " + typeof outsideTemp,
"userEmail -> " + typeof userEmail,
"id = Symbol('123') -> " + typeof id,
"bigNumber = 6546132131498794321n -> " + typeof bigNumber,
typeof (heros),
typeof (sd),
typeof (myFunction)]);



/*******************************  MEMORY  ******************************
 * Stack (Primitive),
 * Heap (Non-Primitive)
*/

// Stack (Primitive)
let myYtName = "jitendra.in";
let myYtName2 = myYtName;
myYtName2 = "narendra.net";
console.table([myYtName, myYtName2]);

// Heap (Non-Primitive)
let userOne = {
    email: "user@google.co.in",
    location: "Sagar"
};

let userTwo = userOne;

userTwo.email="narendra@mail.com"

console.table([userOne, userTwo]);