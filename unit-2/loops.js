/* 
    ? Loops
    * allow us to execute a block of code repeatedly
    * they stop once an exit condition has been met
*/

/* 
    ? For Loop
    * iterates over any data that's iterable
    * iterator - placeholder value
    * iterable - data type we can count through
    
    Syntax:

    for (start; stop; step) {
        code block to execute for each iteration
        until stop/exit condition is true
    }
*/

/* 
    i++ same as i = i + 1 same as i += 1
    means new i value assigned to old i + 1
*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let longWordEN = "supercalifragilisticexpialidocious"

console.log(longWordEN.length) // 34 or 33 index
console.log("----------------------------")

for (let i = 0; i < longWordEN.length; i = i + 1) {
    console.log(`Index: ${i} Letter: ${longWordEN[i]}`)
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an iterable
    * for-in does not require an index number
    * for-in does not require a stop statement
*/

let longWordDE = "kraftfahrzeug-hafplifschtversicherung"
console.log(longWordDE.length)

for (i in longWordDE) {
    console.log(`Index: ${i} Letter: ${longWordDE[i]}`)
}

/* 
    ? For-of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    ? Difference between for-in and for-of in terms of use
    * for-in allows us to loop over items that are not an array
    * for-of only owrks if an item is indexed linked an array or string
*/

let challengeSentence = "I wish this weather was warmer like the other day."

/* 
    ? Challenge
    * loop over the challenge sentence
    * if the character is an "a", "e", and "i", make sure it's console logged
    ! SPICEY MODE
    * keep track of the total and console log the total
    
*/
// My Solution
// console.log(challengeSentence.length)
// for(l in challengeSentence){
//        if(challengeSentence[l] == "a" || challengeSentence[l] == "i" || challengeSentence[l]== "e"){
//         console.log(`Index: ${l} Letter: ${challengeSentence[l]} Detected`)
//        }
//        else{
//         console.log(`Index: ${l} Letter: ${challengeSentence[l]}`)
//        }
//     }
// Their Solution (Part 1)
// let count = 0
// for (let ltr = 0; ltr < challengeSentence.length; ltr++) {
    // if (challengeSentence[ltr] == "a" || challengeSentence[ltr] == "e" || challengeSentence[ltr] == "i") {
    //     console.log(`${challengeSentence[ltr]} detected`)
    //     count = count + 1
    // } else {
    //     console.log(challengeSentence[ltr])
    // }
    // Their Solution (Part 2)
// let countA = 0
// let countE = 0
// let countI = 0
// for(let l = 0; l < challengeSentence.length; l++) {
// if (challengeSentence[l] == "a") countA++
// if (challengeSentence[l] == "e") countE++
// if (challengeSentence[l] == "i") countI++
// }
// console.log(countA, countE, countI)

/* 
? While Loop
* executes a statement inside of a code block
* it does so as long as a while condition evaluates to true

Syntax:

while(true) {
    do this until false
}
*/

let loopCount = 0

while (loopCount <= 10) {
console.log(loopCount)
loopCount += 1
}

// ! Infinite Loop Example DO NOT RUN!
// while(true) {
//     console.log(loopCount)
//     loopCount++
// }

/* 
    ? Do While Loop
    * executes code in the do section while a condition remains true
*/

let doCount = 0
do {
    console.log(doCount)
    doCount++
} while (doCount <= 10)

/* 
    ! FizzBuzz Challenge
    * print the numbers from 0 to 100
    * if a number is a multiple of 3, print "Fizz"
    * if a number is a multiple of 5, print "Buzz"
    * if it's a multiple of 3 & 5, print "Fizz Buzz"
    * otherwise print just the number
*/
// My Solution for 0-100
// let fizzCount = 0
// do{
//     console.log(fizzCount)
//     fizzCount++
// } while (fizzCount <= 100)
for(fizzCount=0; fizzCount <= 100; fizzCount++){
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

let aArray = ["bird", "pig", "cat", "mouse", "dog"]
let nArray = ["chirp", "oink", "meow", "squeak", "bark"]

/* 
    ? Challenge
    * loop over the animal array
    * match the animals with the noises they make
    * ex: bird goes chirp
*/
// My Solution (uses another array)
for(animal of aArray){
    if(animal == "bird"){
        console.log(`${animal} goes ${nArray[0]}`)
    }
    else if(animal == "pig"){
        console.log(`${animal} goes ${nArray[1]}`)
    }
    else if(animal == "cat"){
        console.log(`${animal} goes ${nArray[2]}`)
    }
    else if(animal == "mouse"){
        console.log(`${animal} goes ${nArray[3]}`)
    }
    else if(animal == "dog"){
        console.log(`${animal} goes ${nArray[4]}`)
    }
    else{
        console.log("What does the fox say?")
    }
}

// Their Solution(s) Simplified
// for (animal of animalArray) {
    // if (animal == "bird") console.log("chirp")
    // if (animal == "pig") console.log("oink")
    // if (animal == "cat") console.log("meow")
    // if (animal == "mouse") console.log("squeak")
    // if (animal == "dog") console.log("woof")

    // animal == "bird" ? console.log("chirp")
    //     : animal == "pig" ? console.log("oink")
    //     : animal == "cat" ? console.log("cat")
    //     : animal == "mouse" ? console.log("mouse")
    //     : animal == "dog" ? console.log("woof")
    //     : null

//     switch(animal) {
//         case "bird":
//             console.log("chirp")
//             break
//         case "pig":
//             console.log("oink")
//             break
//         case "cat":
//             console.log("meow")
//             break
//         case "mouse":
//             console.log("whatever")
//             break
//         case "dog":
//             console.log("woof")
//             break
//     }
// }

