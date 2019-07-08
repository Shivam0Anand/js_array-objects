var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};

// 1

var penguin = [gunter, ramon, fred];

// 2

console.log(penguin[0]);

// 3

var secondPenguin = penguin[1];

// 4

console.log(penguin[penguin.length - 1]);

// 5
