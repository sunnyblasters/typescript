"use strict";
let magicianName1 = ['Chris Angel', 'Derren Brown', 'James Randi', 'Greg Wilson'];
let newArry = [...magicianName1];
let myfun = (data) => {
    for (let i = 0; i < data.length; i++) {
        newArry[i] = 'The Great ' + data[i];
    }
};
let showGreat = function (data) {
    data.forEach((item) => console.log(item));
};
myfun(newArry);
console.log('');
showGreat(newArry);
console.log('');
console.log(magicianName1);
console.log('');
console.log(newArry);
