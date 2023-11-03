import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../../utils/constants";

const Menu = () => {
  const { resId } = useParams();
  const [resDetails, setResDetails] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const res = await data.json();
    setResMenu(res?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards);
    console.log(res?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards);
    setResDetails(res?.data.cards[0].card.card.info);
  };

  const { name, cuisines, totalRatingsString, costForTwoMessage } = resDetails;
  return resDetails.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h6>
        <p>{costForTwoMessage}</p>
        <p>{totalRatingsString}</p>
      </h6>
      <h4>Menu</h4>
      {resMenu.map((card, index) => (
        <div key={index}>
          {card?.card?.card?.title ? <h3>{card?.card?.card?.title}</h3> : ""}
          {card?.card?.card?.itemCards?.map((menu) => (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - Rs/-{menu.card.info.price / 100}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
