//1.Define a function named isANumber that takes in a value and returns true if the input is numeric or not. Numeric strings are not considered as numbers and should return false.
//isANumber(23)               // true
//isANumber("42")             // false
//isANumber(3.141)            // true
//isANumber("")               // false
//isANumber(true)             // false
//isANumber("Bob")            // false
//isANumber([1,2,3])          // false

function isANumber(input){
    return typeof input == "number"
}

//2.Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
//increment(0)                // 1
//increment("10")             // 11
//increment(-5)               // -4
//increment("Bob")            // false
//increment([1, 2, 3])        // false
//increment(true)             // false
//increment(null)             // false

function increment(input) {
    if(typeof input === "number"){
        return ++input;
    }
    return isANumber(input);
}


//3.Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
//decrement(19)               // 18
//decrement(0)                // -1
//decrement("4")              // 3
//decrement("Bob")            // false
//decrement([1, 2, 3])        // false
//decrement(false)            // false
//decrement(null)             // false

function decrement(input){
    if(typeof input === "number"){
        return --input;
    }
    return isANumber(input);
}

//4.Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
//getHighestNumber(1, 3, 2)           // 3
//getHighestNumber(0, 1, "2")         // 2
//getHighestNumber(9, 3, -20)         // 9
//getHighestNumber(2, 2, 2)           // 2
//getHighestNumber(2, 5, 5)           // 5
//getHighestNumber(1, 2, 'x')         // false
//getHighestNumber("a", "b")          // false
//getHighestNumber()                  // false

function getHighestNumber(num1,num2,num3){
    if(!isNaN(Number(num1)) && !isNaN(Number(num2)) &&
        !isNaN(Number(num3))){

        return Math.max(num1, num2, num3);
    }else{
        return false;
    }
}




//5.Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.
//parseNumber("123")            // 123
//parseNumber(123)              // 123
//parseNumber("34.4")           // 34.4
//parseNumber(10.5)             // 10.5
//parseNumber("-2")             // -2
//parseNumber("-10.4")          // -10.4

function parseNumber(input){

    return parseFloat(input)
}

//6.Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
//add(1, 2)                   // 3
//add(0, 0)                   // 0
//add(-5, 10)                 // 5
//add("2", 4)                 // 6
//add(5, true)                // false
//add(true, false)            // false
//add("Monday", "Tuesday")    // false
//add(null)                   // false

function add(num1,num2) {
    if(isNaN(parseFloat(num1)) && isANumber(parseFloat(num2))){
        return false
    }
    return Number (num1) + Number (num2);
}

//7.Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
//multiply(4, 2)              // 8
//multiply(0, 44)             // 0
//multiply(-5, 10)            // -50
//multiply(5, true)           // false
//multiply(true, false)       // false
//multiply("Monday")          // false

function multiply(num1,num2) {
    if (isNaN(parseFloat(num1)) && isANumber(parseFloat(num2))) {
        return false;
    }
    return Number(num1) * Number(num2);
}
// 8. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

function square(input) {
    if (typeof input === "number") {
        return input * input
    } else {
        return false
    }
}

// 9. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfSquares(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return (input1 * input1) + (input2 * input2)
    } else {
        return false
    }
}

//10. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// function isPalindrome(input){
//     if(typeof input == "number"){
//         return false
//     } else if(input === "string") {
//         return
//     }
// }

function isPalindrome(input) {
    if (typeof input !== "string") {
        return false
    } else {
        input = input.toLowerCase()
        var totalLength = input.length;
        for (var i = 0; i < totalLength / 2; i++) {
            if (input[i] !== input[totalLength - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}