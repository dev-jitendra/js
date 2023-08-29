//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log(`5 is best number`);
    }
    console.log(element);
};


//Nested For Loops

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j}`);
    };  
};


//print table
for (let i = 0; i <= 10; i++) {
    console.log(2 + ' * ' + i + " = " + i*2);    
};


//for loop with array
let myArray = ["Shaktiman", "Batman", "Superman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
};


// loops in keywords    | break and continue
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of is i is ${i}`);
    
};

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of is i is ${i}`);
    
};