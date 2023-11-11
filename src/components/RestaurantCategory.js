import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setIsOpen }) => {
  return (
    <div className="w-6/12 m-auto mt-8">
      <div className="my-5">
        <div
          onClick={setIsOpen}
          className="flex justify-between cursor-pointer"
        >
          <h1 className="font-bold">
            {data?.title} ({data?.itemCards?.length})
          </h1>
          <span>{isOpen ? "🔼" : "🔽"}</span>
        </div>
      </div>
      <div>
        <div>
          {isOpen
            ? data?.itemCards.map((list) => (
                <ItemList list={list} key={list?.card?.info?.id} />
              ))
            : ""}
        </div>
      </div>
      {<div className="bg-gray-100 h-3 w-full my-4"></div>}
    </div>
  );
};

export default RestaurantCategory;
