import { useState } from "react";
export default function Temperature() {
  const [temp, setTemp] = useState(0);
  return (
    <>
      <h1>Temperature conversion</h1>
      <ChildA setTemp={setTemp}></ChildA>
      <ChildB temp={temp}></ChildB>
    </>
  );
}

function ChildA({ setTemp }) {
  return (
    <>
      <label>
        Type temperaure in Celsius :
        <input type="number" onChange={(e) => setTemp(e.target.value)} />
      </label>
    </>
  );
}

function ChildB({ temp }) {
  const farh = (temp * 9) / 5 + 32;
  return (
    <>
      <h4>After Converting Celsius to Fahrenheit</h4>
      <h3>Temperature = {farh} deg fahrenheit</h3>
    </>
  );
}
