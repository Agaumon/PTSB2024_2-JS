let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true
}

/* 
!   Object Literal
        When our values are written within our keys. "Hard-Coded"

        * Structure

        keyword objectName = {
            key: value,
        }
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */],
    },
    currently_running: true
}

// console.log(theSimpsons.genre); 
// ^Dot Notation; Used for accessing fixed properties.

// console.log(theSimpsons['genre']); 
// ^Square Bracket notation; Allows use of dynamic properties and handles properties with special characters.

// console.log(theSimpsons.seasons["season one"]);

theSimpsons.characters = [
    'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
];
// console.log(theSimpsons);

theSimpsons.characters.push('Ned');
// console.log(theSimpsons.characters);

theSimpsons.currently_running = false;
// console.log(theSimpsons);

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

// console.log(theSimpsons.seasons["season one"][1].aired)
theSimpsons.seasons["season one"][1].aired = `1990-01-14`;
// console.log(theSimpsons.seasons["season one"][1])

//! --------------------------------------
//! Methods

//* Object.keys()
// console.log(Object.keys(theSimpsons));

//* Object.values()
// console.log(Object.values(theSimpsons));

// delete object.key Command
delete theSimpsons.currently_running;
// console.log(Object.keys(theSimpsons));


//! Destructuring Method
const { characters, seasons } = theSimpsons;
// console.log(characters);
// console.log(seasons);

characters.push('Meo');
console.log(theSimpsons);haracters.push('Meo');
// console.log(theSimpsons);
characters[6] = 'Moe';
// console.log(theSimpsons);

const { est: established } = theSimpsons;
// console.log(established);
// console.log(id);

// console.log(Object.keys(theSimpsons))

const simsponCharacters = {
    simpsonHouse: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
    moesTavern: ["Moe","Barney"]
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simsponCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}
console.log(locations);

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

const hulu = {
    id: [413, 4130, 41300],
    movies: [
        { title: 'Oppenheimer',
            genre: ['documentary', 'action'],
            rating: '10/10',
            runtime: 180,
            year: 2023,
        },
        {
        title: 'Barbie',
            genre: ['comedy', 'drama'],
            rating: '10/10',
            runtime: 132,
            year: 2023,
        }
    ],
    shows: 
}