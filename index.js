const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfied"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  name.unshift()
  return name;
}
