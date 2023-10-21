// string, boolean, number

let x: number = 10;
x = 16
console.log(x);

// inferencia x annotation 

let y = 12;

let z: number = 12;

// tipos basicos 

let fistName: string = 'Jorge';
let age: number = 30;
const isAdmin: boolean = true;

console.log(typeof fistName);


fistName = 'João';

console.log(fistName);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

console.log(myNumbers); 
console.log(myNumbers.length);

console.log(fistName.toUpperCase)

console.log(myNumbers.splice(0, 3) );

// tuplas tuple

let myTuple: [number, string, string[]] = [25, 'Jorge', ['a', 'b', 'c']];


// object literals -> {prop: value}

const user: {name: string, age: number, isAdmin: boolean} = {
    name: 'Jorge',
    age: 30,
    isAdmin: true
}

console.log(user);

