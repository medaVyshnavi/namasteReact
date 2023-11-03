import { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact Us",
      route: "/contact",
    },
    {
      name: "Cart",
      route: "/cart",
    },
  ];
  const [value, setValue] = useState(true);
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <li key={index} className="items">
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
        <button onClick={() => setValue(!value)}>
          {value ? "Login" : "Logout"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
