// object literals

// const vasanth = {
//   name: "vasanth",
//   age: 10,
//   job: "developer",
//   details: function () {
//     console.log(
//       `${this.name} is ${this.age} yrs old and works as a ${this.job}`
//     );
//   },
// };

// vasanth.details();

// const Anil = {
//   name: "Anil",
//   age: 15,
//   job: "manager",
//   details: function () {
//     console.log(
//       `${this.name} is ${this.age} yrs old and works as a ${this.job}`
//     );
//   },
// };

// Anil.details();

// factory method --> data -> object
// to follow DRY principle
// function createPerson(name, age, job) {
//   return {
//     name,
//     age,
//     job,
//     details: function () {
//       console.log(
//         `${this.name} is ${this.age} yrs old and works as a ${this.job}`
//       );
//     },
//   };
// }

// const vasanth = createPerson("vasanth", 10, "developer");
// const anil = createPerson("Anil", 15, "manager");
// vasanth.details();
// anil.details();

// vasanth.getAge = function () {
//   console.log(this.age);
// };

// console.log(vasanth);
// console.log(anil);

// vasanth.getAge();

// constructor method

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.details = function () {
//     console.log(
//       `${this.name} is ${this.age} yrs old and works as a ${this.job}`
//     );
//   };
// }

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  details() {
    console.log(
      `${this.name} is ${this.age} yrs old and works as a ${this.job}`
    );
  }
}

const Vasanth = new Person("vasanth", 10, "developer");
console.log(Vasanth);

const Deepak = new Person("Deepak", 30, "ironman");
console.log(Deepak);

Vasanth.details();
Deepak.details();
