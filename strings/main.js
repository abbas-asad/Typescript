"use strict";
//String Methods
let greet = "Hello";
let reply = "I'm fine";
let bye = "     Goodbye     ";
let intro = "My name is Abbas";
console.log(greet.length);
console.log(greet.toUpperCase());
console.log(greet.toLowerCase());
console.log(greet.concat(" How are you? " + reply));
console.log(greet.replace("Hello", "Thanks"));
console.log(greet.slice(0, 3));
console.log(greet.slice(1)); // with a single argument
console.log(intro.split(" "));
console.log(bye.trim());
console.log(greet.includes("e")); // "boolean"
console.log(greet.startsWith("H")); // "boolean"
console.log(greet.endsWith("o")); // "boolean"
