import "./ButtonList.css";
import Button from "../Button/Button";
import { useState } from "react";

function ButtonList() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="ButtonList">
        <Button increment={handleClick} count={count} />
        <Button increment={handleClick} count={count} />
        <Button increment={handleClick} count={count} />
      </div>
    </>
  );
}

export default ButtonList;
