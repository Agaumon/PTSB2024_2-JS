/*
! Promise
    -Is an object that may produce a singular value in the future.

    Has 3 states:
        1. Pending
        2. Fulfilled
        3. Rejected
    
    Takes in two parameters:
        -Resolve
        -Reject
    
    *ALWAYS returns an object.
*/

//? Mock internet send
function getData(cb){ //cb stands for "callback"
    setTimeout(() => {  //Sets a timer
        cb ("some Data");
        // return "some Data"  //Returns item after timer
    }, 3000) // 3000 is equivalent to 3 seconds.
}

// let data = getData(); //The value comes late.
// console.log(data); //Results in "undefined" due to delay of information to previous code line.

// getData(data => console.log(data));
// console.log('Hello World');

/*
*A promise is an object that may produce a singular value in the future.
    -Resolved
    -Rejected
        These detail what to do depending on the results
*/

//Example of above definitions
function returnData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){   //If promise returns true, the following is returned.
                resolve('some data from Promise')
            }
            else{   //Otherwise, if promise is false then the following is returned.
                reject('This is a rejection');
            }
        }, 5000)
    })
}
console.log(returnData());  //Details the promise object.

/*
    -When returned, the returnData() function will return a Promise instead of a given string.

    -Chained with a resolver
        -Keywords
            - .then() -> if successful; can be chained together.
            - .catch() -> if there is an error.
        -Takes in a callback function.
        -Only put a semicolon AFTER the last resolver. 
*/

//Example:
returnData()    //The following are the resolvers and their conditions.
    .then(data => console.log('From Response ', data))  //If prior Promise is true, will console.log the string and the string from {data}.
    .then(() => {
        let x = 10;
        let y = 20;
        console.log(x + y);
    })
    .catch(function(error){ //If prior Promise is found to be false, will print the string from else in the prior Promise.
        console.error(error)
    });
/* The Process
    -Creating a new Promise.
        -(Resolve, Reject) are parameters of a callback function.
    -setTimeout() is acting as our "waiting" for a resource.
    -resolve() or reject() said promise.
    -When returned, returns a Promise object - not a string.
    -Use of resolvers (.then() and .catch()) with CB functions to extrapulate the info from that promise object.
*/