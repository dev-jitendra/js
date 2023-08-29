//for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);    
};


// with string
const greetings = "Hello JavaScript!";
for (const n of greetings) {
    console.log(`${n}`);
};


//maps
const newMap = new Map();
newMap.set('in','india');
newMap.set('USA','United States of America');
newMap.set('Fr','France');
newMap.set('in','india');

console.log(newMap);

for (const [key,value] of newMap) {
    console.log(key, ":- ", value);
};


const myObject = {
    "game1":"NFS",
    "game2":"Spiderman"
};

// for (const [key,value] of myObject) {
//     console.log(key, ":- ", value);
// };