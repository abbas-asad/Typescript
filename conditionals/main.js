"use strict";
// #1 (Real world example)
let email = "abbas07tech@gmail.com";
let password = "pass123";
if (email && password) {
    console.log("Dear User ! Welcome");
}
else {
    console.log("Invalid email or password");
}
// #2 (1 to 100 counting)
for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("divisible by 3 & 5");
    }
    else if (i % 3 == 0) {
        console.log("divisible by 3");
    }
    else if (i % 5 == 0) {
        console.log("divisible by 5");
    }
    else {
        console.log(i);
    }
}
// #3 (Driving check)
let age = 27;
if (age >= 18) {
    console.log("Congrats 🎉! You can drive.");
}
else {
    console.log("Sorry 😢! You can't drive.");