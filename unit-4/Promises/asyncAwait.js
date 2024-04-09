/*
!Async/Await
    -Introduced in ES8 in 2017.
    -Can make any function into an async function by using the following keywords:
        -async
            -Denotes a function
        -await
            -Calls a process to wait for an expected result.
    -Can help us reduce the need for Callback functions.
    -Cannot be used in loops.
    -ALWAYS returns a promise.
*/

//Example of syntax being used:
async function asyncFuncDeclaration(){
    //Your code here.
};

//Example #2:
let funcExpression = async function(){
    //Your code here.
};

//Example #3:
let arrowFunc = async () => {
    //Your code here.
};

//Full Example:
async function extraData(){ //Invokes function.
    let info = returnData(); //Invokes function and stores it into 'info'
    return (`${info} in some cloud.`); //Returns object of promise.
}

extraData().then(data => console.log(data)); //Refers to .then from 'promises.js' and prints out  