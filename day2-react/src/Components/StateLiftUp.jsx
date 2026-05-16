import { useState } from "react";
export default function StateLiftIp() {
  const [input, setInput] = useState("");
  return (
    <>
      <ChildA setInput={(input, setInput)}></ChildA>
      <ChildB input={input}></ChildB>
    </>
  );
}

function ChildA({ input, setInput }) {
  return (
    <>
      <label>
        Type something : `
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </>
  );
}

function ChildB({ input }) {
  return (
    <>
      <p>child A is typing {input}</p>
    </>
  );
}
