import "./Code.css";
import { useEffect, useRef, useState } from "react";

function Code({onFinish}) {
  const [code, setCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef(null);
  const codeLength = 6;

  useEffect(() => {
    if(currentIndex < code.length){
    container.current.querySelectorAll("input")[currentIndex].focus();
    }
    else if(code.length == codeLength){
        onFinish()
    }
  }, [currentIndex]);

  function onKey(e) {
    if (e.key == "Backspace") {
      if (currentIndex == 0) return;

      setCode((code) => code.substring(0, code.length - 1));
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
    else if(!isNaN(e.key) && currentIndex < codeLength) {
    setCode((code) => code + e.key);
    setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  }

  return (
    <>
      <div ref={container} className="Code-Container" onKeyDown={onKey}>
        {new Array(codeLength).fill("").map((_, i) => (
          <input className="Code-Digit" value={code[i] || ""}></input>
        ))}
      </div>
    </>
  );
}

export default Code;
