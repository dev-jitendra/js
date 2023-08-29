//Functions
function sayMyName(){
    console.table([
        "N",
        "a",
        "r",
        "e",
        "n",
        "d",
        "r",
        "a"
    ]);
};

sayMyName();

//sum
/*function sum(n1,n2){

    console.log(n1+n2);
};
*/

function sum(n1,n2){
    let result = n1+n2; 
    return result;
};

// sum(3,4);    // -> 7
// sum(3,'a');  // -> 3a
const result = sum(3,5);
console.log("Result: ",result);

function loginUserMessage(username = "Ram"){
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} Just logged in`;
};
const res = loginUserMessage();
console.log("UserName: ",res);

/*
loginUserMessage("")    -> Just logged in
loginUserMessage()  -> undefined Just logged in
*/


//cart [... -> rest/spread operator]
function calculateCartPrice(...num1){
    return num1;
};
console.log(calculateCartPrice(200,300,500));

const user = {
    username: "Narendra",
    price: 199
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
};

handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200, 300, 500, 800];
function returnSecondValue(getArray){
    return getArray[1];
};
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 120, 650]));