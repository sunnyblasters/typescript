"use strict";
let friends_Name = ['Sunny', 'Azeem', 'Sharjeel'];
let message = 'This is my Friend name';
console.log(message, friends_Name[0]);
console.log(message, friends_Name[1]);
console.log(message, friends_Name[2]);
// OR
friends_Name.forEach((data) => {
    console.log(`${message} ${data}`);
});
