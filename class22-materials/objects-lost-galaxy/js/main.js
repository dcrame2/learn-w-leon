// //Create a mouse object that has four properties and three methods
// let mouse = {
//     feet: 4,
//     tail: true,
//     lenght: 4,
//     color: 'white',

//     chese = function() {
//         return 'I love Cheese'
//     },

//     hungry = function() {
//         return 'Feed me'
//     },

//     family = function() {
//         return 'My family died'
//     }

// }

/*
function StreetFight(figherHeight, fighterPunch, fighterGender) {
  (this.height = figherHeight),
    (this.punch = fighterPunch),
    (this.gnder = fighterGender);

  this.win = function () {
    return "kncoked out";
  };
}

let superman = new StreetFight(5, "hard", "male");

console.log(superman);

function MakeSFChar(punch, kick, catchPhrase, specialMove) {
  (this.punch = punch),
    (this.kick = kick),
    (this.catchPhrase = catchPhrase),
    (this.specialMove = specialMove);

  this.taunt = function () {
    console.log(`You can't handle my ${this.specialMove}`);
  };
  this.winning = function () {
    console.log(`Haha! ${this.catchPhrase}`);
  };
  this.dash = function () {
    console.log("Whopppp, misssed me!");
  };
}

let ryu = new MakeSFChar(
  "high",
  "high",
  "Get OVER HERE",
  "HAAADDDDDDUUUCCCCCENNNNNN"
);
*/
/*
// Creating an Object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

//factory function
function createCircle(radius) {
  return {
    radius: radius,

    draw: function () {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);

// Constructor function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw bitch");
    });
}

const another = new Circle(1);
console.log(another.draw());
*/
// Example
// let x = {};
// let x = new Object()
/*
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw bitch");
    });
}

Circle.call({}, 1);
*/

/*
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
*/

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw bitch");
    });
}

const circle = new Circle(10);

// user.token = 'asdasdsd';

circle.location = { x: 1 };
console.log(circle);
circle["location"];
