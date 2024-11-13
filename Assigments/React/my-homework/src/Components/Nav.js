import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="header row" id="top">
        <div className="col logo-col">
          <img src="assets/images/logo.png" alt="Company Logo" />
        </div>
        <button className="btn-white duplicate">Join</button>
        <div className="hamburger" tabIndex="0">
          <span className="material-symbols-outlined">menu</span>
          <div className="notification-down">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="button">
                <a href="index.html">Get the App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col navigation-col">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="col btn-primary">
          <button className="btn-white">Join</button>
          <button className="btn-black">Get the App</button>
        </div>
      </header>
    </>
  );
}
