const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfied"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKItten(name) {
  var kittens1 = kittens [...kittens]
  return kitten1;
}
