const name = "Narendra";
const repoCount = 10;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//declare string second method
const newName = new String("Narendra-Lodhi");
const newName2 = new String("  Narendra-Lodhi   ");
console.table([newName, typeof newName,
    newName[0], newName[1], newName[2], newName[3], newName[4], newName[5], newName[6], newName[7],
    newName.__proto__]
    );

console.table([
    newName.length, 
    newName.toUpperCase(), 
    newName.charAt(5), 
    newName.indexOf('d'), 
    newName.substring(0, 4), 
    newName.slice(0,4), 
    newName.slice(-4,-5),
    newName2.trim()]
    );

const url =  "https://:jitendra.in/jdr%20lodhi";
console.table([
    url.replace('%20','-'),
    url.includes('jitendra'),
    newName.split('-')
]);


