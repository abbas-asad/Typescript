// Hoisting

// Variable Hoisting
console.log(myVar); // Output: undefined
var myVar = 5;

// In this example, you might expect a ReferenceError since myVar is printed before it's declared. However, due to hoisting, the JavaScript interpreter sees the code as follows:


var myVar;
console.log(myVar); // Output: undefined
myVar = 5;

// Note: We don't use var because of global scope and hoisting, instead of this we use the let keyword.

// Function Hoisting

// Function declarations are fully hoisted. This means that the entire body of the function, along with its declaration, is hoisted to the top of its scope. Here's how it works:

console.log(myFunc()); // Output: "Hello World"

function myFunc() {
  return "Hello World";
}
