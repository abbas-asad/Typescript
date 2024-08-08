// ES6 Modules
// #1
export function sum(a, b) {
    const c = a + b;
    console.log(`The sum of ${a} and ${b} is ${c}`);
}
// #2
export function greet(name) {
    console.log(`Hello ${name}! How are you?`);
}
// #3 (Default)
// A file has only one default
export default function mainfunction() {
    console.log("This is the mainfunction of the file");
}
