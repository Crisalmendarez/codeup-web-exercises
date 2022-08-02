/*console.log("working")

var username = prompt("Enter your username").toLowerCase();
var password = prompt("Enter your password").toLowerCase();

var currUsername = "username"
var currPassword = "password"

if (username === currUsername && password === currPassword) {
    alert("you have logged in")
}else if(username === currUsername && password !== currPassword){
}else if (username !== currUsername){
    alert("invalid username")
}else if (password !== currPassword) {
    alert("invalid password")

}else {
    alert("unexpected error")
}*/

var isRaining;
isRaining = confirm("is it raining?")
    isRaining ? console.log("wear a jacket, it's raining") : console.log("nope, take a hike");

var favMovie = prompt("What is your favorite movie").toLowerCase();

switch (favMovie){
    case "toy story":
      alert("I despise this movie");
      break;
    case "lion king":
        alert("mid")
        break;
    case "back to the future":
        alert("I don't know who likes this but he must be a cool guy")
        break;
    default:
        alert("invalid movie")
}







