import "./Button.css";

function Button({count, increment}) {

  return (
    <button
    onClick={increment}  className="Button"> {count}
    </button>
  );
}

export default Button;
