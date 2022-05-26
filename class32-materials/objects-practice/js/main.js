//Encapsulation: using the methods into one class. We fused the information together.
//Inheritance: Using super to take the data from the parent class.
//Polymorphism: write code that will work for all of your objects that we create. Supports the other pillars of OOP
class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100devs!`);
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100devs and I use ${this._tech}`
    );
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100devs and I use ${this._tech}`
    );
  }
}

let bob = new Contractor("Bob", "Front-end");
let simba = new Front("Simba", "Front-end", "React");
let machi = new Back("The Machine", "Back-end", "Node");

let agency = [bob, simba, machi];

agency.map((person) => person.sayHello());
