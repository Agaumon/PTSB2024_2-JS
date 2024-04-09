/*
! API: Application Programming Interface
    -Used for client to communicate with the server.
    -Allows for HTTP request and response lifecycle.
    -Part of a RSTful architecture.
    -RST = Representational State Transfer
    -It is a stateless, cacheable, layered system that allows req and res using:
        -CRUD: Create, Read, Update, and Delete.
        -HTTP methods include POST, GET, PUT, and DELETE.
        -HTTP requests sent from the client:
            -Headers
            -Body (POST, PUT)
            -Query parameters (GET, DELETE)
        -HTTP response received from the server:
            -Headers
            -Status code
            -Contains payload

*/

/*
! URL & URI
    -URL = Uniform Resource Locator (Identifier)
    -Address that allows us to access web resources.
    -DNS (Domain Name Server) resolves the URL string into an IP address.

! Example:
    http://www.example.com:80?/path/to/myfile.html?key1=value&key2=value2#SomewhereInTheDocs
    Scheme://Domain Name:Port/Path to file?Parameters#Anchor

    -Example:
        -www.google.com = domain
            -Can have sub-domains (Ex. gmail.google.com)
            -.com | .net | .gov | .co.uk
        -Port: 80  for HTTP or :443 for HTTPS
        -Path
            -Location and structure of content within the resource.
        -Query Parameters
            -Map to key-value pairs within an object.
            -Begins with "?"
            -Separated
*/

/*
! Fetch API
    -Fetch is an async function.
Fetch Proccess:
1. Fetch your resource and return promise.
2. Use .then resolver to catch fetch's return and assign to a parameter.
3. The parameter is part of a Response interface object.
4. Body of our response is inaccessible. It's part of a ReadableStream object.
5. Utilize response interface's .json() method to read the object.
6. .json() method returns a promise.
7. Resolve the promise with one more .then() resolver.
8. Catch (.catch()) the return as a data parameter.
*/

/*
! DOC site: 
    https://pokeapi.co/
*/
//Example:
const url = `https://pokeapi.co/api/v2/pokemon/`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data.results)
        data.results.forEach(pokemon => {
            let h3 = document.createElement(`h3`);
            h3.textContent = pokemon.name;
            document.body.appendChild(h3);
        })
        data.results.forEach(pokemon => {
            let p = document.createElement(`p`);
            p.textContent = pokemon.weight;
            document.body.appendChild(p);
        })
        data.results.forEach(pokemon => {
            let img = document.createElement(`img`)
            img.src = pokemon.sprite;
            document.body.appendChild(img);
        })
    })
    .catch(err => console.error(err));

async function getData(){
    try{
        const res = await fetch(`${url}darkrai`)
        const data = await res.json();
        console.log(data)
    }
    catch (err){
        console.log(err);
    }
}

getData();

/* 
    ? Instructions
    * connect your files (index, style, app)
    * create a pokedex card in index: (div)
    * it should have name (h3), weight (p), and picture (img)
    * above it, there should be a form with an input field and a Go button
    * access all elements within app.js using DOM
    * create an event listener that listens for the button click
    * when the button is clicked, it should grab the input value (aka pokemon name)
    * it should then trigger a fetch to the pokemon api with that pokemon name
    * it should then display the values of that pokemon's name, weight, and picture

*/
