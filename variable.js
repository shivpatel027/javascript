//Variables

let language = 'Javascript'

// another way
let language1;
language1 = 'javascript';

console.log(language1);

// const

// you cant chnage the value 
const number = 12;
console.log(number);

// functions scope
//var language3 = 'javascript';

// block scope
if(true) {
    var age = 24;
}

console.log(age);

// block scope
// let will give the error if you use it outside the block scope 
if(true) {
    let age = 24;
    console.log(age);
}

// console.log(age);


// you can store any type of data in the variable
const name = {
    name: 'Shiv',
    age: 22
}

// Hoisting

console.log(greeting);
var greeting = 'Hello'; //undefined output
//let greeting = 'Hello'; //Error: Cannot access 'greeting' before initialization 

//undefined is also special the data type.

// var, let, const?

