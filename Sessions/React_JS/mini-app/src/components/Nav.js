import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="navBar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            About
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Spring
          </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
