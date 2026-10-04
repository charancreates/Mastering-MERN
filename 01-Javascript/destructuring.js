const response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: "alice", role: "admin" },
      { id: 2, name: "bob", role: "user" },
    ],
    total: 2,
  },
};

// status, total, and the first user's name
const {
  status,
  data: { total, users: [{ name: firstName } = {}] = [] },
} = response;

console.log(status);
console.log(total);
console.log(firstName);

const data = { user: { namee: "charan", age: 21, skills: ["react", "node"] } };

// const { user } = data;
// const {
//   namee,
//   age,
//   skills: [skill],
// } = user;

const {
  user: {
    namee,
    age,
    skills: [skill],
  },
} = data;
console.log(namee);
console.log(age);
console.log(skill);
