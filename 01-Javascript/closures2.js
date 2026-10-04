// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

function outer() {
  let usrname = "akul";
  function inner() {
    console.log(usrname);
  }
  inner();
}
outer();
// console.log("Too outer", username);

//closure
function makeFun() {
  const name = "mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFun();
console.log(myFunc);
myFunc();
