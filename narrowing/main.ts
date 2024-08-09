// Type literals and narrrowing

// #1
let value = Math.random() > 0.5 ? "abbas" : 66;

if (typeof value === "string") {
  console.log(value.toUpperCase()); // If value is a string
} else if (typeof value === "number") {
  console.log(value.toExponential()); // If value is a number
}

// #2
let age: number | "died" | "unknown";
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error

// #3
let trafficLight: "red" | "blue" | "green";
trafficLight = "red"; //OK
trafficLight = "blue"; //OK
trafficLight = "green"; //OK
// trafficLight="yellow";//Error
