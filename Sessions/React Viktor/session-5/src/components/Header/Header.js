import "./Header.css";

function Header({title ,desc}) {
  return (
    <>
      <div className="hero">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Header