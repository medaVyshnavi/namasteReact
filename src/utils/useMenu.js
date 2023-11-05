import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const res = await data.json();
    setMenuInfo(res.data);
  };
  return menuInfo;
};

export default useMenu;
