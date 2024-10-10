export default function Header(props) {
  return (
    <>
      <div className="logo">
        <img src="./assets/img/space.png" alt="Space Logo" />
      </div>
      <h4>
        {props.num}.{props.slogan}
      </h4>
    </>
  );
}
