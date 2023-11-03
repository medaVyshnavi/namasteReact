import { useState } from "react";
import logo from "../img/logo.png";

const Header = () => {
  const navItems = ["Home", "About", "Contact Us", "Cart"];
  const [value, setValue] = useState(true);
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <li key={index} className="items">
            {item}
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
