import { useContext, useState } from "react";
// import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserDetails from "../utils/userContext";
import { useSelector } from "react-redux";

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
      name: "Grocery",
      route: "/grocery",
    },
    {
      name: "🛒",
      route: "/cart",
    },
  ];
  const [value, setValue] = useState(true);
  const onlineStatus = useOnlineStatus();
  const details = useContext(UserDetails);
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center mx-6">
      <div className="w-36">
        <img
          className="w-30 h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        ></img>
      </div>
      <ul className="flex justify-around items-center">
        <li className="px-4">
          Status
          <span>{onlineStatus ? "✅" : "🔴"}</span>
        </li>
        {navItems.map((item, index) => (
          <li key={index} className="px-4">
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
        <span className="pr-3">{items.length}</span>
        <button onClick={() => setValue(!value)}>
          {value ? "Login" : "Logout"}
        </button>
        <li className="px-4">👩‍💻{details.loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
