import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  function increment() {
    if (index >= images.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }
  function decrement() {
    if (index <= 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={decrement} disabled={index === 0 ? 'true' : 'false'}>
          Previous
        </button>
        <div>{images[index]}</div>
        <button
          onClick={increment}
          disabled={index >= images.length - 1 ? 'true' : 'false'}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Carousel;
