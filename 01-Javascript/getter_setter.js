class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password;
  }

  set password(vlaue) {
    this._password = vlaue;
  }
}

const hasham = new User("hasham", "patanahi123");
console.log(hasham.password);
