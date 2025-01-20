import "./Card.css";

function Card({ title, description, isOpen , handleClick}) {
  return (
    <>
      <div className={`Accordion-Card ${isOpen ? "Open" : ""}`}>
        <h3 className="Accordion-Card-Title">{title}</h3>
        <p className="Accordion-Card-Description">{description} </p>
        <button className="Accordion-Card-ShowMore" onClick={handleClick}>Show More </button>
      </div>
    </>
  );
}

export default Card;
