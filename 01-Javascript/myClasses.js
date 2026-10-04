//ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}xyz`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("virat", "virat@gmail.com", "idk");

//behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}xyz`;
// };

// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

console.log(user1.encryptPassword());
console.log(user1.changeUsername());
