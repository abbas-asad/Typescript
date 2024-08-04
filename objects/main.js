"use strict";
// Objects
// #1
let book = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: "Warner Books",
    price: 19.99,
    totalPages: 207,
};
console.log(book);
console.log(book.title);
console.log(book["title"]);
let message = `I have a book\nThe title of book is ${book.title}\nAuthor of book is ${book.author}\nPrice is ${book.price}`;
console.log(message);
// #2
let person = {
    name: "Abbas Asad",
    age: 21,
    grade: "A",
};
let message2 = `My name is ${person.name}\nMy age is ${person.age}\n`;
console.log(message2);
