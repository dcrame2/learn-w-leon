//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Cheetah extends Animal {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }
}

class Cat extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }

  speak() {
    console.log("moew");
  }
}
