/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. in global scope, this will always refer to the window object
 * 2. in the call site if this keyword is associated with a parent object, it refers to it.
 * 3. new binding is when an instance of the constructor object is created out of thin air.
 * 4. whenever we use call and apply method, that is explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function damnWindow(name) {
  return `hi i am ${this.name}`;
}
damnWindow("Tenzing");

// Principle 2

// code example for Implicit Binding
let friend = {
  firstName: "Ash",
  sayHi: function() {
    return this.firstName + " says hello!";
  }
};
console.log(friend);

// Principle 3

// code example for New Binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let tenz = new Person("Tenzing", 35);
let lobs = new Person("Lobsang", 36);
console.log(tenz, lobs);

// Principle 4

// code example for Explicit Binding

let animal = {
  introduce: function() {
    return this.name + " is a " + this.type + " and says " + this.sound + "!";
  }
};
let tommy = {
  name: "tommy",
  type: "dog",
  sound: "woof"
};
let timmy = {
  name: "timmy",
  type: "cat",
  sound: "meow"
};
console.log(animal.introduce.call(tommy));
console.log(animal.introduce.call(timmy));
