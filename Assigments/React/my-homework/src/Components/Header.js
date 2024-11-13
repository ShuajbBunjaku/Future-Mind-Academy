export default function Header(props) {
  return (
    <>
      <div className="wrapper-lg text-center hero-contact">
        <div className="contact-section">
          <img
            src="assets/images/bg.png"
            alt="Background Image"
            class="bg-img contact"
          />
          <h1 className="dark contact">{props.title}</h1>
          <br />
          <p className="contact-text">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
}
