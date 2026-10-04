// const p1 = Promise.reject(3);
// const p2 = Promise.reject(30);
// const p3 = Promise.reject(300);

// Promise.all([p1, p2, p3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log("err: " + err);
//   });
const p1 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

const p2 = Promise.reject(30);
// const p2 = Promise.resolve(30);

const p3 = new Promise((resolve) => setTimeout(() => resolve(300), 1000));

Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch(() => console.log("error h"));
