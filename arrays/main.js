"use strict";
// Array and Array methods
// Array
// Array is a collection of items. In other words, variable stores a value and array stores multiple variables / values.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 5, 8, 6, 9];
let arr3 = [6, 55, 38, 96, 89];
let arr4 = [56, 505, 338, 196, 989];
let arr5 = [6, 35, 3, 9, 8];
// Array methods
// There are methods that modify the original array, such as pop, and methods that do not modify the original array, such as slice. Some methods remove elements from an array and return the removed elements, while others add elements to an array and return the new length of the array. Here are the details:
// Convert array to string (does not modify original array)
let arrayToString = arr1.toString();
console.log(`${arrayToString} \n`);
// Join array elements with ":" separator (does not modify original array)
let arrayJoined = arr1.join(":");
console.log(`${arrayJoined} \n`);
// Remove last element (modifies original array)
let lastElement = arr1.pop();
console.log(`${arr1}  returns  ${lastElement} \n`);
// Add element at the end (modifies original array)
let lengthAfterPush = arr1.push(6);
console.log(`${arr1}  returns  ${lengthAfterPush} \n`);
// Remove first element (modifies original array)
let firstElement = arr1.shift();
console.log(`${arr1}  returns  ${firstElement} \n`);
// Add element at the beginning (modifies original array)
let lengthAfterUnshift = arr1.unshift(0);
console.log(`${arr1}  returns  ${lengthAfterUnshift} \n`);
// Delete operator
// Delete isn't a function but an operator and returns a boolean value, it makes undefined to the 0 index of your array
// delete arr1[0];
// console.log(`${arr1} ${arr1.length} ${delete arr1[0]} \n`);
// Concatenate multiple arrays (does not modify original array)
// 00 and 01 isn't a good practice ant the indexing of 0 in concatenation is only single 0
let concatenatedArrays = arr1.concat(arr2, arr3, arr4, arr5);
console.log(`${concatenatedArrays} \n`);
// Sort array using sortTheArray function (modifies original array)
let sortTheArray = (a, b) => a - b;
console.log(`${concatenatedArrays.sort(sortTheArray)} \n`);
// Reverse array (modifies original array)
console.log(`${arr1.reverse()} \n`);
// Splice array (modifies original array)
let splicedArray = arr1.splice(3, 5, 1, 2, 9, 8, 3, 9, 8);
console.log(`${arr1}  returns  ${splicedArray} \n`);
// Slice array (does not modify original array)
let slicedPart1 = arr1.slice(2, 3);
console.log(`${slicedPart1} \n`);
let slicedPart2 = arr1.slice(3); // Single Parameter