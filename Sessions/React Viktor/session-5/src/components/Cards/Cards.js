import "./Cards.css";

function Card({ cardTitle, cardDesc, cardList, cardPrice, cardCurrency })
{
  return (
    <>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Card 1" />
        <h3>
          {cardTitle}- <u>{cardPrice + cardCurrency}</u>
        </h3>
        <p>{cardDesc}</p>
        <ul className="card-list">
          {cardList.map((card) => {
            return <li>{card}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Card;
