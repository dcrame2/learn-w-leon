class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`);
  }
}

//Created our objects
let simba = new Dog("Simba", "Shepard");
let machi = new Dog("The Machine", "Pitbull");
let salem = new Cat("Salem", "American Shorthair");

//put the objects into an array
let farm = [simba, machi, salem];

for (a of farm) {
  a.speak();
}
