//Global Scope
let a = 10;
const b = 20;
var c = 30;

//Block Scope
if(true){
let a = 10;
const b = 20;
var c = 30;
};

console.table([
    // a,
    // b,
    c
]);

function one(){
    const username = "Narendra";
    function two(){
        const website = "Github";
        console.log(username);
    };
    // console.log(website);
    two();
};
one();

//with if statement
if(true){
    const username ="Narendra";
    if(username){
        const website = " Github";
        console.log(username + website);
    };
    // console.log(website);
};
// console.log(username);


// +++++++++++++++++++++++++++++++++++  Interesting  +++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1;
};


//addTwo(5);    // Not Allowed
const addTwo = function(num){
    return num + 2;
};
addTwo(5);

