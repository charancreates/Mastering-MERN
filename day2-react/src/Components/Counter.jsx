import { useState } from "react";
function Counter() {
  const [count, setCounter] = useState(0);

  function HandleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function HandleDecrease() {
    setCounter(count - 1);
  }

  function HandleReset() {
    setCounter(0);
  }

  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={HandleIncrease}> Increase</button>
      <button onClick={HandleDecrease}> Decrease</button>
      <button onClick={HandleReset}> Reset</button>
    </>
  );
}
export default Counter;
