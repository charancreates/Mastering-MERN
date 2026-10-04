let myName = "charan      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

console.log(myName.trueLength());

let myHeros = ["thor", "hulk"];

let heroPower = {
  thor: "hammer",
  hulk: "super strength",

  getHulkPower: function () {
    console.log("Hulk Smash! (super power ->" + this.hulk + ")");
  },
};

Object.prototype.idk = function () {
  console.log("idk man, its in all objects");
};
let str = "hi";

Array.prototype.Hi = function () {
  console.log("Hi man");
};

// heroPower.idk();
// myHeros.idk();
// str.idk();

// myHeros.Hi();

const User = {
  _yo: "yoyo",
  name: "pata nahi",
  email: "idk@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntac
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.email);

"idk   ".trueLength();
