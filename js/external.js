"use strict";


var myAge = 25;
console.log(myAge);
alert("this is my external file");
//This reads last because js reads top to bottom
alert("this is my second alert");

var isStudent = confirm(" Click okay if you are you a student");
console.log(isStudent);

var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
console.log(firstName + lastName);