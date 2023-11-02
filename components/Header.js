import logo from "../img/logo.png";

const Header = () => {
  const navItems = ["Home", "About", "Contact Us", "Cart"];
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
      </ul>
    </div>
  );
};

export default Header;
