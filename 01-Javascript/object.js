function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const p1 = new createUser("p1", 30);
const p2 = new createUser("p2", 30);

p1.increment();
console.log(p1.printMe());

// new keyword ke sath construtor function, prototype of construtor
