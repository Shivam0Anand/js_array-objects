var myPenguin = {
  Name: "Alfred",
  Origin: "Zig at Puce",
  Creator: "Alain Saint-Organ"
};

//  1

myPenguin.favoriteFood = ["Krill", "Fish", "Squids"];

// 2

myPenguin.secondFavFood = ["bread", "biscuit", "choco"];
console.log(myPenguin.secondFavFood);

//3

var firstFavFood = myPenguin.favoriteFood[0];

//4

myPenguin.favoriteFood.push("bread");

//5

console.log(myPenguin.favoriteFood.length);

//6

myPenguin.favoriteFood[myPenguin.favoriteFood.length - 1] = "pineapples";

//7

var lastFavFood = myPenguin.favoriteFood[myPenguin.favoriteFood.length - 1];

//8

for (var i = 0; i < myPenguin.favoriteFood.length; i++) {
  console.log(myPenguin.favoriteFood[i]);
}
