const user = {
    username: "Narendra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

function chai(){
    console.log(this);
};
chai();


//Arrow Function
const chai1 = () => {
    let username = "Narendra";
    console.log(this);
};
chai1();


//arrow function | Basic Syntax
const addTwo = (n1, n2) =>{
    return n1 + n2;
};
console.log(addTwo(3, 4));


// shortcut method
const addThree = (n1, n2) =>( n1 * n2)
console.log(addThree(3, 4));

//return object
const add = () =>( {name : "Narendra"})
console.log(add());