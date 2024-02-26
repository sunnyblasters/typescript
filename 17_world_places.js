var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myList = ['India', 'China', 'Usa', 'Saudia Arabia', 'Dubai'];
console.log(myList, '\n');
var new_list = __spreadArray([], myList, true).sort();
console.log(new_list.sort(), '\n');
console.log(myList, '\n');
console.log(new_list.reverse(), '\n');
console.log(myList, '\n');
console.log(myList.reverse(), '\n');
console.log(myList.reverse(), '\n');
console.log(myList.sort(), '\n');
console.log(myList.reverse(), '\n');
