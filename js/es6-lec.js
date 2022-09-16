"use strict";

let arrayOfNames = ['Julian', 'Anthony', 'Amida', 'Nick']

//old for loop
for(let i = 0; i <= arrayOfNames.length; i++){
    console.log(arrayOfNames[i]);
}

//es6 version for of loop
for(let name of arrayOfNames){
    console.log(name);
}



const sayHello = function (name) {
    return 'Hello, ' + name + '!';
}
console.log(sayHello("Cristian"));

// const sayHello = (name) => 'Hello, ' + name + 'i';
//     const greeting = 'Hello,  ' + name + '!';
//     return greeting;
// console.log(sayHello("Cristian"))