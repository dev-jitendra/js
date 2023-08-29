/*
#Truthy Values
"0",
"false",
" ",
[],
{},
function(){}


#Falsy Values
false,
0,
-0,
0n(BigInt),
"",
null,
undefined,
NaN
*/

const userEmail = "h@narendra.ai";

if(userEmail){
    console.log(`got user email`);
}else{
    console.log(`Don't have user email`);
}


const usersEmail = [];
if(usersEmail.length ===0){
    console.log(`array is empty`);
}else{
    console.log(`array is filled`);
};

const users_Email = {};
if(Object.keys(users_Email).length === 0){
    console.log(`Object is empty`);
}else{
    console.log(`Object is filled`);
};



// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;     //5
val2 = null ?? 20;  //20
val3 = undefined ?? 50;  //50
val4 = null ?? undefined;  //undefined
val5 = undefined ?? 50;  //50
val6 = null ?? 23 ?? 50;  //23
val7 = null ?? undefined ?? 50;  //50
console.table([val1, val2, val3, val4, val5, val6, val7]);


//Ternary Operators

const iceTeaPrice = 100;
// condition ? true : false;
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`greater than 80`);