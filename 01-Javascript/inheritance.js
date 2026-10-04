class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    //User.call(this,username); //old version
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const selwyn = new Teacher("selwyn paul", "thatandallidk@gmail.com", "idk");

selwyn.addCourse();

const u1 = new User("userOne");

u1.logMe();
selwyn.logMe();

console.log(u1 === selwyn);
console.log(u1 instanceof User);
console.log(selwyn instanceof User);
console.log(selwyn instanceof Teacher);
