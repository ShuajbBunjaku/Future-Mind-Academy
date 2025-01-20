import { useState } from "react";
import "./input.css"

function Input() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <input
        onChange={(e) => {
          setCounter(e.target.value.length);
        }}
      />
      <label>{counter}</label>
    </>
  );
}

export default Input;
