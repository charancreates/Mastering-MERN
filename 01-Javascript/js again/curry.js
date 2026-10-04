import _ from "lodash";

let dragon = (name, size, element) =>
  name + " is a " + size + " dragon that breathes " + element + "!";

// console.log(dragon("charizard", "huge", "fire"));

// let dragon = (name) => (size) => (element) =>
//   name + " is a " + size + " dragon that breathes " + element + "!";

// console.log(dragon("charizard")("huge")("fire"));

dragon = _.curry(dragon);

let pokemon = dragon("charizard");
let hugePokemon = pokemon("huge");
console.log(hugePokemon("fire"));

// function can pass through the application and gradually receives
// the arguments that it needs
