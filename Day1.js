// OOPs -> Object Oriented Programming structure -> paradigm

// class -> a custom data structure -> rules(flexible)
// object -> real time entities
// attribute or property -> variable inside a class
// methods or behaviour -> function inside a class

// ways to create objects
// 1. object literals
// 2. factory method
// 3. constructor method

// const vasanth = {
//   name: "vasanthkumar",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };
// vasanth.display();

// const virat = {
//   name: "virat kohli",
//   age: 20,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// virat.display();

// factory method
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const vasanth = createPerson("vasanthkumar", 10);
// const virat = createPerson("virat kohli", 20);

// vasanth.display();
// virat.display();

// this keyword -> creator

// OOPs -> Object Oriented Programming structure -> paradigm

// class -> a custom data structure -> rules(flexible)
// object -> real time entities
// attribute or property -> variable inside a class
// methods or behaviour -> function inside a class

// ways to create objects
// 1. object literals
// 2. factory method
// 3. constructor method

// const vasanth = {
//   name: "vasanthkumar",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };
// vasanth.display();

// const virat = {
//   name: "virat kohli",
//   age: 20,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// virat.display();

// factory method
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const vasanth = createPerson("vasanthkumar", 10);
// const virat = createPerson("virat kohli", 20);

// vasanth.display();
// virat.display();

// this keyword -> creator

// function display() {
//   console.log(this);
// }

// display();

// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// syntactic sugar
// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // singleton -> global

// const vasanth = new person("vasanth", 10);
// const virat = new person("virat", 18);
// console.log(vasanth);
// // console.log("_____________________________________________________________");
// console.log(virat);

const users = ["vasanth", "deepak", "karthik", "ram"];
// user -> karthik
const index = users.findIndex("karthik");
users.splice(index, 1);
console.log(users);
