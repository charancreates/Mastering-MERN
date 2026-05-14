function makeCounter() {
  let count = 0;
  function counta() {
    count++;
    console.log(count);
  }
  return counta;
}

const c = makeCounter();
const b = makeCounter();
c();
c();
c();
c();
c();
c();
c();
c();
b();
c();
