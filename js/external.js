"use strict";

console.log("Hello from external Javascript");
alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?")
alert("Great, " + favoriteColor + " is my favorite color too")

var littleMerDays = prompt("How many days did you rent the Little Mermaid?")
var broBearDays = prompt("How many days did you rent Brother bear?")
var herDays = prompt("How many days did you rent Hercules?")
const cost = 3
var total = (littleMerDays * cost) + (broBearDays * cost) + (herDays * cost)
alert("The total cost of these three movies, " + total)

var google = prompt("How many hours did you work at google?")
var amazon = prompt("How many hours did you work at amazon?")
var facebook = prompt("How many hours did you work at facebook?")
var total = (google * 400) + (amazon * 380) + (facebook * 350)
alert("Your total pay for the week is, " + total)

var enrollIfFreeAndAvail = confirm('Are you free and wish to enroll?')
if(enrollIfFreeAndAvail)
    alert("Click here to enroll")









