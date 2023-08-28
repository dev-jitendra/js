// Array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeros = ["Shaktiman","Naagraj", "Hatim", "Sonpari"];
const myArr2 = new Array("Shaktiman","Naagraj",0, 1, 2, 3,)
console.log(myArr[4]);


//Array Methods
console.table([
    `push() -> ${myArr2.push(12)}`,
    myArr2,
    `pop() -> ${myArr2.pop()}`,
    myArr2,
    `unshift() -> ${myArr2.unshift(9)}`,
    myArr2,
    `shift() -> ${myArr2.shift()}`,
    myArr2,
    `includes() -> ${myArr2.includes(9)}`,
    myArr2,
    `indexOf() -> ${myArr2.indexOf(9)}`,
    myArr2,
]);

const newArr = myArr2.join();
console.table([
    `myArr2 ->  ${myArr2}`,
    `myArr2 -> ${typeof myArr2}`,
    `newArr ->  ${newArr}`,
    `newArr -> ${typeof newArr}`

]);


//slice, splice methods
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log(myArr);