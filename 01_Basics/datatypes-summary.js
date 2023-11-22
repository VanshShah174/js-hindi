// Primitive 


// 7 types :  string , Number , Boolean , null, undefined , Symbol, BigInt


// JavaScript is a dynamically typed language,
// which means that data types of variables are determined by the 
//value they hold at runtime and can change throughout the program as we assign different values to them


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference ( Non Primitive )

// Array , Objects , Functions

const heroes = ["shaktiman" , "doga"]

 let myObj = {

    name: 'vansh',
    age:  21
}

const myFunction = function() {
    console.log('hello world')
}

console.log(typeof myFunction);

// to get to know about typeof more 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/ty