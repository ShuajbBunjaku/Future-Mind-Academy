import "./Card.css";

//every component is a function

function Card(props) {
  return (
    <div className="Card">
      <img className="Card-Image" src="./logo512.png" />
      <div className="Card-Details">
        <h3 className="Card-Header">{props.fullname}</h3>
        <h4 className="Card-SubHeader">{props.occupy}</h4>
      </div>
    </div>
  );
}

export default Card;
