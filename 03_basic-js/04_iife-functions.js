// Immediately Invoked Function Expressions (IIFE)

//named IIFE
(function chai(){
    console.log("DB_CONNECTION");
})();
// chai();

//with arrow function | simple IIFE
( (name) =>{ 
    console.table([`DB_CONNECTED ${name}`]);
})('Nitesh');

