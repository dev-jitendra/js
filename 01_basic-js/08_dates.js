//Dates

let myDate = new Date();
console.log(myDate);

console.table([
    myDate,
    myDate.toString(),  // -> 'Mon Aug 28 2023 12:25:20 GMT+0000 (Coordinated Universal Time)'
    myDate.toDateString(),  // -> 'Mon Aug 28 2023'
    myDate.toISOString(),   // -> '2023-08-28T12:25:20.505Z'
    myDate.toJSON(),    // -> '2023-08-28T12:25:20.505Z'
    myDate.toLocaleDateString(),    // -> '8/28/2023'
    myDate.toLocaleTimeString(), // -> '12:25:20 
    typeof myDate   // -> 'object'
]);


let myCreateDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate);
console.table([
    myCreateDate,
    myCreateDate.toString(),    // -> 'Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)'
    myCreateDate.toDateString(),    // -> 'Mon Jan 23 2023'
    myCreateDate.toISOString(), // -> '2023-01-23T00:00:00.000Z'
    myCreateDate.toJSON(),  // -> '2023-01-23T00:00:00.000Z'
    myCreateDate.toLocaleDateString(),  // -> '1/23/2023'
    myCreateDate.toLocaleTimeString(),  // -> '12:00:00 AM'
    typeof myCreateDate // -> 'object'
]);

let myTimeStamp = Date.now();
//miliseconds
console.log(myTimeStamp);   // -> 1693226478818
//miliseconds
console.log(myCreateDate.getTime());   // -> 1674450180000
//convert miliseconds to seconds
console.log((Math.floor(Date.now()/1000)));   // -> 1693226651


let newDate = new Date();
console.table([
    newDate.getDate(),  // -> 28
    newDate.getDay(),   // -> 1
    newDate.getFullYear(),  // -> 2023
    newDate.getHours(), // -> 12
    newDate.getMinutes(),   // -> 46
    newDate.getMonth(), // -> 7
    `${newDate.getDate()} and the time`
]);


console.table([newDate.toLocaleString('default',{
    weekday: "long"
})]);