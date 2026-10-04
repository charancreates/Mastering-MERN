class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName :- ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const fahad = new User("fahad");
// console.log(fahad.createId());
