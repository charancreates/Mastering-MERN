const marvel = ["thor", "ironman"];
const dc = ["superman", "batman"];

// marvel.push(dc);
// const allHeros = marvel.concat(dc);
const allHeros = [...marvel, ...dc];

// console.log(allHeros);

const obj1 = { 1: "aha", 2: "yoyo" };
const obj2 = { 10: "asha", 20: "ysoyo" };

// const allObj = Object.assign({}, obj1, obj2);
// const allObj = { ...obj1, ...obj2 };
// console.log(allObj);

//for of

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }
// for (const num in arr) {
//   console.log(arr[num]);
// }

// const greetings = "hi bro";
// for (const letter of greetings) {
//   console.log(letter);
// }

//maps
const map = new Map();
map.set("karnataka", "India");
map.set("California", "USA");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}
// for (const key in map) {
//   console.log(key); //not iteratable
// }

// for (const [key, value] of obj1) {
//   console.log(key, ":-", value);
// }

// for (const key in obj1) {
//   console.log(key + " for " + obj1[key]);
// }

// allHeros.forEach((item) => {
//   console.log(item);
// });

// allHeros.forEach(function (item) {
//   console.log(item);
// });

function printMe(item) {
  console.log(item);
}
// allHeros.forEach(printMe);

// allHeros.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "java",
    filename: ".java",
  },
  {
    languageName: "javascript",
    filename: ".js",
  },
  {
    languageName: "python",
    filename: ".py",
  },
];

// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });

// const values = allHeros.forEach((item) => {
//   console.log(item);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = myNums.filter((num) => {
  return num > 4; //{} scope open so filtered
});

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History");
const userBooks = books.filter(
  (book) => book.publish <= 2000 && book.genre === "History",
);

// console.log(userBooks);

// const nNum = myNums.map((num) => num + 10);
const nNum = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(nNum);

const nums = [1, 2, 3];

// const myTotal = nums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval ${currval}`);
//   return acc + currval;
// }, 0);
const myTotal = nums.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 4999,
  },
  {
    itemName: "java course",
    price: 6999,
  },
  {
    itemName: "dsa course",
    price: 499,
  },
];

const TotalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(TotalPrice);
