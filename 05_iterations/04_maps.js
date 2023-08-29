const myObject = {
    js:"NFS",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
};

for (const key in myObject) {
    // console.log(key);   
    console.log(`${key} shortcut is for ${myObject[key]}`);
    };

const progrmming = ["js","rb","py","java","cpp"];
for (const key in progrmming) {
    console.log(`${key} shortcut is for ${progrmming[key]}`);
};

//maps
const newMap = new Map();
newMap.set('in','india');
newMap.set('USA','United States of America');
newMap.set('Fr','France');
newMap.set('in','india');

for (const key in newMap) {
    console.log(`${key}`);
};