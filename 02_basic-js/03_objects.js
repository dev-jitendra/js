// singleton


//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Narendra",
    [mySym]: "myKey1",
    age: 18,
    location: "Indore",
    email: "mail@gmail.com",
    isLoggedIn: false,
    lasetLoginDays: ["Monday", "Saturday"]
};
console.log(JsUser.email);

//square notation -> second method
console.log(JsUser["age"])
console.log(JsUser[mySym])

//freeze() -> object method
JsUser.email = "narendra@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "narendra@microsoft.com";
console.log(JsUser);


// Function with object
JsUser.greeting = function(){
    console.log("Hello JavaScript Objects");
};
JsUser.greetingTwo = function(){
    console.log(`Hello JavaScript User, ${this.age}`);
};

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());