import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useMenu from "../utils/useMenu";
import RestaurantCategory from "./RestaurantCategory";

const Menu = () => {
  const { resId } = useParams();
  const menuInfo = useMenu(resId);

  const [isOpen, setIsOpen] = useState(null);

  if (menuInfo === null) return <ShimmerUI />;

  const { name, cuisines, totalRatingsString, costForTwoMessage } =
    menuInfo?.cards[0]?.card?.card?.info;

  const menu = menuInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards;
  const categories = menu.filter(
    (res) =>
      res?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleChange = (index) => {
    if (index === isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-center text-lg font-bold">{name}</h1>
        <h3 className="my-4">{cuisines.join(", ")}</h3>
        <div>
          {categories?.map((item, index) => (
            <div key={index}>
              <RestaurantCategory
                key={index}
                data={item.card.card}
                isOpen={index === isOpen ? true : false}
                setIsOpen={() => handleChange(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
