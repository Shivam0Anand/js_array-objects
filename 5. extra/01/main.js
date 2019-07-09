// Your solution
// 1

function animalTestUser(username) {
  var obj = {
    username
  };
  return obj;
}

// 2

function animalTestUser(username) {
  var obj = {
    username
  };

  obj.otherArgs = [];
  if (arguments.length < 1) {
    for (var i = 1; i < arguments.length; i++) {
      obj.otherArgs.push(arguments[i]);
    }
  }
  console.log(obj);
}

//3
function AnimalCreator(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises
  };
}

// 4

var cow = AnimalCreator("Moo", "Cow", "You cant count me!", ["maahhh"]);
function addFriend(sheep, cow) {
  sheep.friend.push(cow);
}

// 5

function addFriend(sheep, cow) {
  sheep.friend.push(cow.username);
}

//6
