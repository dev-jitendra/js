const score = 400;

const balance = new Number(123.8966);
console.table([
    balance,
    typeof balance,
    balance.toString(),
    balance.toFixed(2),
    balance.toPrecision(3),
    typeof balance,
    balance
]);

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++++++++++++++    MATHS   +++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.table([
    Math.abs(-4),
    Math.round(4.65),
    Math.ceil(4.65),
    Math.floor(4.65),
    Math.min(4,6,5,4,8,2,9),
    Math.max(4,6,5,4,8,2,9),
    Math.random(),
    Math.random()*10+1,
    Math.floor(Math.random()*10)+1,
]);


const min = 10;
const max = 20;
const res = Math.random() * (max - min + 1) + min;

console.table([
    Math.floor(res)
]);