const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Narendra",
            lastname: "Lodhi"
        }
    }
};

//access objects
console.log(regularUser);
console.table([
    regularUser,
    regularUser.fullname,
    regularUser.fullname.userfullname,
    regularUser.fullname.userfullname.firstname,
    regularUser.fullname.userfullname.lastname
]);

//merge/combine objects
const obj1 = {
    1:"a",
    2:"b"
};
const obj2 = {
    3:"c",
    4:"d"
};
const obj4 = {
    5:"e",
    6:"f"
};

//method one {01}
/*const obj3 ={...obj1, ...obj2};
console.table([obj3]);
*/

//method two {02}
                     //target, sources
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);

//
const users = [
    {
        id:12,
        name:"suresh"
    },
    {
        id:13,
        name:"rakesh"
    },
    {
        id:12,
        name:"suresh"
    },
    {
        id:13,
        name:"rakesh"
    }
];


console.log(users[1].name);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
  
//check available property 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "Jitendra"
};

// Object Destructure
const {courseInstructor: cI} = course;
console.log(cI);

