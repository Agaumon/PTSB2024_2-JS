/*
Arrays
- Denoted by use of square brackets []
- Index starts at 0
*/
let list = [ 'milk', 'bread', 'chicken', 'coffee' ];
//             0       1         2          3 
// console.log(list[2]);
// console.log(list.length);

list[0] = 'chocolate milk';
// console.log(list);

/* !Challenge!
! Using the console.log();
    - target "Bruce" - DONE
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', ['Tony', 8, true]
];

// console.log(avengers[4]);
// console.log(avengers[5][2]);
// console.log(`Hello ${avengers[0]}. Hello ${avengers[5][0]}`);

// let x = 'a'

// console.log(typeof avengers);
// console.log(avengers instanceof Array);
// console.log('INSTANCE OF X: ', x instanceof Array);
// console.log(avengers instanceof Object);

//! Methods
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for(item of food) {
//     console.log(item);
// }

//* .push() Command
// food.push('Pizza'); // adds the value to the end of the array
// console.log('Push: ', food);

//* .splice Command (position to add value to, number value to remove, new value)
// food.splice(1,1,"Tacos");
// console.log('Splice: ', food);

// food.splice(1,0,'Steak');

//* .pop() Command
food.pop(); // removes item from end of array.
// console.log('Pop: ', food);

//* .shift() Command
food.shift(); //removes item from start of array
// console.log('Shift: ', food);

//* .unshift() Command
food.unshift('Hamburger', 'Salad'); //adds item(s) to start of array
// console.log('Unshift: ', food);

//* .toString() Command
let rgb = ['red','green','blue'];
// console.log(typeof rgb); //results in 'object'
// console.log(rgb.toString()); //Will return the values as strings instead of "object"
// console.log(typeof rgb);

//* .filter() Command & .includes()
/* 
    - does not destroy original array
    - store the filter array in a new variable
    - takes a callback function that returns true/false
    - loops the array
    - must have a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

// How can I use a filter to remove a mango?

const filteredFruit = fruits.filter(fruit => {
    let results = fruit !== 'mango';

    return results;
});

// console.log(filteredFruit); 
//? How can I remove any fruit that has the word "apple" in it?

let fruit1 = 'pineapple';
// console.log(fruit1.includes('apple')) // returns a boolean

const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
/* 
                        array.filter(() => {})
                        ^            ^         ^
    Filters through array          Array    Object being filtered out
*/
// console.log(filteredFruit2);

/* 
!   Challenge: 
        How do you remove the 5s from the array?
        Store it in a new variable and console.log that variable
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];
// const fnumbers = myNumberArray.filter(fnumber => fnumber !== '5');
const fNumbers = myNumberArray.filter(fnumber => {
    let results = fnumber !== 5;

    return results;
})
// console.log(fNumbers);

//* .forEach() Command

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
]

for(let i = 0; i < newFoodList.length; i++) {
    // console.log(newFoodList[i])
}

// newFoodList.forEach(item => console.log('For Each: ',item));

//* .find() Command
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';

// console.log('Find: ', tmnt.find(c => c == character))

//* .map() Command

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i);

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x);
});

console.log(fizzBuzzArray);