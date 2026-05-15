import { useState } from "react";
function TextInput() {
  const [input, setInput] = useState("");

  function HandleInputChange(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <label htmlFor="input-text">Enter something</label>
      <input
        type="text"
        id="input-text"
        value={input}
        onChange={HandleInputChange}
      />
      <h4>You have entered {input.length} characters</h4>
    </>
  );
}

export default TextInput;
