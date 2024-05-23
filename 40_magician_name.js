"use strict";
let magicianName = ['Chris Angel', 'Derren Brown', 'James Randi', 'Greg Wilson'];
let magicianFunction = (name) => {
    for (const i of name) {
        console.log(i);
    }
};
magicianFunction(magicianName);
