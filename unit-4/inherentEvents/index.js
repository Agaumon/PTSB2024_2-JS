/*
! Forms
    -Default behavior that sends a GET request to the action attribute value.
    -Can be overwritten using event.preventDefault()
    -Name attribute within HTML element gives data its properties.

! URLs
    -Uniform Resource Locator
    -Carries protocol, top domain, sub domain, route, and any quaries
    -Query parameters are the data that comes from our form
    -Begins with '?' and is followed by a key-value pair
    -Separated with an '&' symbol
Example:
    127.0.0.1:4000/index.html?email=jpes%40email.com&pwd=test
    ^         ^     ^                   ^ ^
URL/Host   Port#       Query           Key value pair (email & pwd=password)
*/

let url = document.location.search;
console.log('URL String', url);
//Creates a location object that sanitzies query parameters.
let params = new URLSearchParams(url);
console.log(params);

// Utilize .get() method of the location interface to access query value
let email = params.get('email');
let password = params.get('password');

const btn = document.getElementById("submit");
const output = document.getElementById("output");

const db = [
    { email: "one@email.com", password: 'password123'},
    { email: "two@email.com", password: 'test'},
    { email: "three@email.com", password: 'testing'}
];

btn.addEventListener('click', e => {
    e.preventDefault();
    let email = e.target.form[0].value;
    let password = e.target.form[1].value;


const foundUser = db.filter(entry => entry.email === email);


if(foundUser.length === 0){ //Means if the user is not found.
    output.textContent = "No user found"
} else{
    if(foundUser[0].password === password){
            output.textContent = 'Logged In'
        } 
        else{
            output.textContent = "Incorect email or password"
        }
    }

})