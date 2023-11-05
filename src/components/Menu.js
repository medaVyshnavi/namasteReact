import React from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useMenu from "../utils/useMenu";

const Menu = () => {
  const { resId } = useParams();
  const menuInfo = useMenu(resId);

  if (menuInfo === null) return <ShimmerUI />;

  const { name, cuisines, totalRatingsString, costForTwoMessage } =
    menuInfo?.cards[0]?.card?.card?.info;

  const menu = menuInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h6>
          <p>{costForTwoMessage}</p>
          <p>{totalRatingsString}</p>
        </h6>
        <h4>Menu</h4>
        {menu.map((card, index) => (
          <div key={index}>
            {card?.card?.card?.title ? <h3>{card?.card?.card?.title}</h3> : ""}
            {card?.card?.card?.itemCards?.map((menu) => (
              <li key={menu.card.info.id}>
                {menu.card.info.name} - Rs/-{menu.card.info.price / 100}
              </li>
            ))}
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default Menu;
