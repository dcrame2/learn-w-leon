//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, toppings, crust, sauce) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCrust = crust;
  this.pizzaSauce = sauce;

  this.estimatedDeliveryTime = function () {
    console.log("Calculating....");
  };

  this.burnMouth = function () {
    console.log("FAFoijwognvronr");
  };

  this.frisbee = function () {
    console.log("YEEEeeeeet");
  };
}

let pizza = new PizzaMachine(
  "large",
  ["spinach", "garlic"],
  "deep dish",
  "white"
);
