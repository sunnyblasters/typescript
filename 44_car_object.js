"use strict";
let myCar = function (manufacturer, model, color, feature) {
    let myObj = {
        manufacturer: manufacturer,
        model: model,
    };
    if (color !== undefined) {
        myObj.color = color;
    }
    if (feature !== undefined) {
        myObj.feature = feature;
    }
    return myObj;
};
console.log(myCar('corrolla', 2018, 'black'));
