"use strict";
// string, boolean, number
let x = 10;
x = 16;
console.log(x);
// inferencia x annotation 
let y = 12;
let z = 12;
// tipos basicos 
let fistName = 'Jorge';
let age = 30;
const isAdmin = true;
console.log(typeof fistName);
fistName = 'João';
console.log(fistName);
const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(fistName.toUpperCase);
console.log(myNumbers.splice(0, 3));
// tuplas tuple
let myTuple = [25, 'Jorge', ['a', 'b', 'c']];
// object literals -> {prop: value}
const user = {
    name: 'Jorge',
    age: 30,
    isAdmin: true
};
console.log(user);
