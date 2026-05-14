function average(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  //   args.forEach((item) => {
  //     sum += item;
  //   });
  return sum / args.length;
}

const avg = average(1, 2, 3);
console.log(avg);

const user1 = {
  name: "ash",
  personality: "dumb",
};
const user2 = {
  name: "misty",
  personality: "annoying",
};

const users = { ...user1, ...user2 };

const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

const arrays = [...arr1, ...arr2];

console.log(arrays);
console.log(users);
