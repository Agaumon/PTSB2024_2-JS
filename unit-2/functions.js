/* 
    ? Functions
    * a block of reusable code; it can:
    * take in arguments thru its parameters (doors to inside fx)
    * perform an action
    * and return a result
    
    ? There are two main types of functions
    * function declaration
        * hoisted
    * function expression
        * not hoisted
    
    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the parmeter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }
*/

// Function definition
function sayHello() {
    console.log("Hello February Cohort");
}

// Function invocation (calling)
sayHello()

function greetClassmates(name) {
    console.log(`Hello, ${name}`);
}

greetClassmates("Lucas");
greetClassmates("Andrew");

let someVariable = "Paul";
console.log("HEREREREREE", someVariable);
let studentName = greetClassmates("Sajjad");
console.log("------------", studentName);

function startCar(make) {
    return `${make} is on`;
}

let bmw = startCar("BMW");
console.log(bmw);

console.log(startCar("Porsche"));

function passName(name) {
    return name;
}

console.log(passName("Richard"));

/* 
    ? Challenge
    * create a function declaration called addNums
    * it will take two parameters
    * it will reurn the result of the two numbers added
*/

function addNums(num, num2) {
    return num + num2;
}

let result = addNums(5, 8);
console.log(result);

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:
    let identifier = function(params) {
        code block
        return statement
    }

*/


let nameAge = function(name, age) {
    return "Your name is " + name + " and you're " + age + " years old"
}

console.log(nameAge("Archana", 20));

/* 
    ? Pythagorean Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 + b**2
    * the formula is as as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangle sides
    * return the hypoteneuse (c side)
    * hint: Math object has a .sqrt method()
*/

let pythTheorem = function (a , b){
    return Math.sqrt(a**2 + b**2);
}
let hyOnPotEnUse = pythTheorem(10, 2);
console.log(hyOnPotEnUse);

/* 
    ? Concise Body Arrow Function
    * can have none or one paramter ONLY
    * code block must NOT have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello everyone`;

console.log(greetEveryone());

let greetDoctor = drName => `Hello, Dr. ${drName}`
console.log(greetDoctor("John"));

// ? Block Body Arrow Functions

let concatenateStrings = (str1, str2) => {
    if (typeof str1 != "string" || typeof str2 != "string") {
        return `You can only pass string values as arguments`;
    } else {
        return str1 + str2;
    }
}

console.log(concatenateStrings("Archana", 2));

// ? Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log("I'm an IIFE");
})()

/* 
    ? FizzBuzz 2.0
    * use your fizzBuzz code from earlier BUT
    * wrap it inside of a function
    * allow me to choose my start value
    * allow me to choose my stop value
    * ! SPICEY MODE
    * ensure values are only positive
*/

function fizzyBuzz(start , stop){
for(fizzCount=start; fizzCount <= stop; fizzCount++){  
    if(fizzCount % 3 === 0 && fizzCount % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(fizzCount % 3 === 0){
        console.log("Fizz")
    }
    else if(fizzCount % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(fizzCount)
    }
}
}
fizzyBuzz(0 , 20);

function fizzBuzz(start, stop) {
    if (start >= 0 && stop >= 0) {
        for (let i = start; i <= stop; i += 1) {
            i % 15 == 0 ? console.log("FizzBuzz")
                : i % 3 == 0 ? console.log("Fizz")
                : i % 5 == 0 ? console.log("Buzz")
                : console.log(i)
        }
    } else{
    console.log("You didn't provide us with positive values yo")}
}

fizzBuzz(1, 25);

/* 
    ? Reverse Words in a String
    * write a function that takes a string as input
    * it must return the same string with the order of the words reverse
    * ex: paul returns luap
    * your task is to implement reverseWords function and test it with different inputs
*/

function reverseWords(sentence){
    let reversed = "";
    for(i = sentence.length - 1; i >= 0; i--) {
        reversed = reversed + sentence[i];
    }
    return reversed;
}

console.log(reverseWords("Yo mama"))

// Their Solution
// function reverse(str) {
//     let reversed = ""
//     for (i = str.length - 1; i >= 0; i--) {
//         console.log(`Letter: ${str[i]} Index: ${i}`)
//         reversed = reversed + str[i]
//     }
//     return reversed
// }

// console.log(reverse("Paul"))