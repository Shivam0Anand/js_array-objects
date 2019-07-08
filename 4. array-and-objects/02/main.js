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

var myPenguin = {
  Name: "Alfred",
  Origin: "Zig at Puce",
  Creator: "Alain Saint-Organ"
};

penguin.push(myPenguin);

// 6

console.log(penguin.length);

// 7

penguin[0].canFly = true;

// 8

penguin[0].sayHello();

// 9

for (var i = 0; i < penguin.length; i++) {
  console.log(penguin[i].name);
}

// 10

for (var i = 0; i <= penguin.length; i++) {
  penguin[i].sayHello();
}

// 11

for (var i = 0; i < penguin.length; i++) {
  penguin[i].noOfFeet = 2;
}

//12
for (var i = 0; i <= penguin.length; i++) {
  if (penguin[i].canFly == true) {
    console.log(penguin[i].name + " can Fly!");
  }
}
