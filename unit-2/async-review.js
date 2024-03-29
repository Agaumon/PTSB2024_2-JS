/* 
    ? Async Challenge
    * create a function that will return a promise object
    * this promise object must resolve itself 2 second after the call to job
    * it must provide `hello world` in the data
    * There are 3 ways to approach it
        * Promises
        * async function
        * mix of either and .then resolvers
*/

function standardFx() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Hello world"))
        }, 2000);
    })
}
// First Solution Using Regular Function
// standardFx()

// Second Solution Using Async
// async function asyncFx() {
//     return "Hello world"
// }

// Third Solution that Uses Second Solution
// asyncFx().then(data => console.log(data))

// async function wrapper() {
//     console.log(await asyncFx())
// }