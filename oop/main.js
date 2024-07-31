"use strict";
// OOPs
// #1  (Properties)
class Book {
    constructor(bname, aname, price) {
        (this.bname = bname), (this.aname = aname), (this.price = price);
    }
    isbook() {
        console.log(`The book name is ${this.bname}\nThe author of this book is ${this.aname}\nIt's price is ${this.price}\n`);
    }
}
let book1 = new Book("travel of america", "george orwell", 500);
let book2 = new Book("mathematics fundamentals", "john doe", 300);
let book3 = new Book("history of the world", "jane smith", 400);
let book4 = new Book("science experiments", "albert einstein", 250);
let book5 = new Book("literature classics", "mark twain", 350);
let book6 = new Book("computer programming", "ada lovelace", 600);
let book7 = new Book("art of war", "sun tzu", 200);
let book8 = new Book("the great gatsby", "f. scott fitzgerald", 180);
let book9 = new Book("to kill a mockingbird", "harper lee", 320);
let book10 = new Book("rich dad poor dad", "robert kiyosaki", 270);
book1.isbook();
book2.isbook();
book3.isbook();
book4.isbook();
book5.isbook();
book6.isbook();
book7.isbook();
book8.isbook();
book9.isbook();
book10.isbook();
// #2
class House {
    constructor(name, /* hNum: number ,*/ OwnerNIC) {
        this.Ownername = name;
        // this.Housenumber = hNum
        this.OwnerCNIC = OwnerNIC;
    }
}
let h1 = new House("Ahmad", 112);
let h2 = new House("Ali", 113);
console.log(h1);
console.log(h2);
// h2.Ownername = "Aslam"; // We can also change from here
// console.log(h2.Ownername);
// Here are some examples of inheritance and methods in OOPs
// Ex.1
class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(this.name, "is walking");
    }
    eat() {
        console.log(this.name, "is eating");
    }
}
class cat extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(this.name, "meows");
    }
}
class dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(this.name, "barks");
    }
}
let c1 = new cat("cat1");
let d1 = new dog("dog1");
c1.walk();
d1.walk();
c1.meow();
d1.bark();
// Ex.2
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(this.name + " starts");
    }
    stop() {
        console.log(this.name + " stops");
    }
}
class Aeroplane extends Vehicle {
    constructor(name) {
        super(name);
    }
    fly() {
        console.log(this.name + " flies");
    }
}
class Car extends Vehicle {
    constructor(name) {
        super(name);
    }
    horn() {
        console.log(this.name + " horns");
    }
}
let aero1 = new Aeroplane("PIA");
aero1.start();
aero1.stop();
aero1.fly();
let car1 = new Car("Toyota");
car1.start();
car1.stop();
car1.horn();
// Ex.3
class Person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        // We have to pass the properties (name and age) in parameter of constructor but we don't have to make that properties in body of constructor because of inheritance. In body of constructor we will pass name and age by calling super like this "super(name,age)"
        super(name, age);
        this.grade = grade;
    }
}
let std1 = new Student("Abbas", 21, "A");
console.log(std1);
