function setUserName(username) {
  //complexx db calls;
  this.usrname = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const user1 = new createUser("wmj", "y@gmail.com", "123");
console.log(user1);
