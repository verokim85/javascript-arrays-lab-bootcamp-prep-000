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

function appendKitten(name) {
  var kittens1 = [...kittens]
  kittens1.push(name)
  return kitten1
}

function prependKitten(name){
  var newkitten = [...kittens]
  newkitten.shift(name)
  return newkitten
}
