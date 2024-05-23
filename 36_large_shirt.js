"use strict";
let largeShirt = function (size = 'large', message = 'I love Typescript') {
    console.log(`The size of the shirt is ${size} and the message is, ${message}`);
};
largeShirt();
console.log('');
largeShirt('medium');
console.log('');
largeShirt('small', 'I love Python');
