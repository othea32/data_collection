console.log("Hello World!");

// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }

// Array
// let movies = ["The Matrix", "John Wick", "The Lord of the Rings"];

// let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let firstMovie = movies.length;  // 'Caddyshack'

// console.log(firstMovie);

// movies[1] = 'Batman';
// movies[5] = 'Shrek';
// movies.length = 50;

// console.log(movies);

// console.log(movies[4]); // undefined

// for (let x of movies) {
//  console.log(x);
// }

// for (let i = 0; i < movies.length; i++) {
// 	console.log(movies[i]);
// }

// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];
// adds moviesto the end of the array
// myMovies.push('Trading Places', 'Antitrust');
// adds movies to the beginning of the array
// myMovies.unshift('The Matrix', 'John Wick');
// myMovies.shift();
// myMovies.pop();

// let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

// console.log(yourMoviesManyTimes);

// let yourMoviesCopy = yourMovies.concat();

// console.log(yourMoviesCopy);

// let ourMovies = yourMovies.concat(myMovies);

// console.log(ourMovies);

// let movieString = myMovies.join(" but ");

// console.log(movieString + " all walk into a bar..."); // Batman and The Count of Monte Cristo and Shrek all walk into a bar...

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');

// removedMovies = movies.splice(0, 3);

// removedMovies = movies.splice(1, 0, 'The Sting');

// console.log(removedMovies);
// console.log(myMovies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let middleMovies = movies.slice(1,3);
// middleMovies => ['Interstellar', 'Scarface']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']
// console.log(middleMovies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let myMovie = movies.at(-2); // 'Scarface'

// console.log(myMovie);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// movies.reverse();

// console.log(movies);

// let numArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[
// 		[7, 8, 9],
// 		[10, 11, 12],
// 		[13, 14, 15]
// 	],
// ];

// console.log(numArray[2][1][0]); // 10

// let twoD = numArray.flat();
// console.log(twoD);

// let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
// movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']

// console.log(numArray);
// console.log(movies);

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// let batmanIndex = movies.indexOf('Batman'); // 2

// console.log(batmanIndex);

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Batman', 'Spaceballs', 'Alien', 'Batman', 'The Count of Monte Cristo'];

// let batmanIndex = movies.lastIndexOf('Batman'); // 8

// console.log(movies.lastIndexOf);

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie) => {
// 	console.log(movie);
// });

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'The Last Airbender', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie, i) => {
// 	console.log(i + ') ' + movie);
// });

// for (let movie of movies) {
// 	if (movie === 'The Last Airbender') break;
// 	console.log(movie);
// }

// let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
// let moviesCopy = [...movies];
// console.log(moviesCopy);

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989
// };

// console.log(vehicle.year);

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

// console.log(vehicle["active registration"]); // true

// const borough = {
// 	name: "Brooklyn",
// 	name: "The Bronx"
// }

// console.log(borough);

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

// vehicle.color = "red"; // changing an existing property value
// vehicle.make = "Audi"; // adding a new key:value pair
// delete vehicle["active registration"]; // removing an existing property

// console.log(vehicle);

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	make: "Audi"
// }

// for (const key in vehicle) {
// 	console.log(vehicle[key]);
// }

// const vehicle = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// console.log(vehicle.engine.size);

// let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// console.log(myMovies == yourMovies);

// const vehicle1 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// const vehicle2 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// console.log(vehicle1 == vehicle2);

// const mogwai  = {};

// mogwai.name = 'Gizmo';

// console.log(mogwai);

// const mogwai = {};

// mogwai = { name: 'Gizmo' }; do not do this

// const obj = {
// 	salutation: 'hi',
// 	count: 4
// }

// if (obj.salutation === "hi") {
// 	console.log('ok');
// }

// for (let i = 0; i < obj.count; i++) {
// 	console.log(i);
// }

const obj = {
	something: 'wuttt'
}

if (obj.something) {
	console.log('ok');
}

if (obj.anotherthing){
	console.log('ok');
} else {
	console.log("that property doesn't exist");
}