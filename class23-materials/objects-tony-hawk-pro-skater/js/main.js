//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(name, height, age, move) {
  (this.name = name),
    (this.height = height),
    (this.age = age),
    (this.specialMove = move),
    (this.trick = function () {
      console.log("I just did a back flip");
    });

  this.flip = function () {
    console.log("Kickflip!!");
  };

  this.taunt = function () {
    console.log(`Don't make me use my ${this.specialMove}`);
  };

  this.grab = function () {
    console.log("MELON GRABBB");
  };
}

let kareemCampbell = new ProSkater("Kareem", 69, 25, "Ghetto Bird");
