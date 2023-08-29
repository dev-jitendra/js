const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval;
}, 0);

console.log(myTotal);

const total = myNums.reduce( (acc, curr)=> acc+curr, 0);
console.log(total);


const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "php course",
        price: 6999
    }
];
const addItem = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(addItem);