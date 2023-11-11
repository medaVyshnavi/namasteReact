import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  const dispatch = useDispatch();

  const handleAddItem = (name) => {
    dispatch(addItem(name));
  };

  return (
    <div>
      <div className="text-left my-4">
        <div className="flex justify-between">
          <div className="pr-20 w-9/12">
            <h3 className="font-bold text-lg ">{list?.card?.info?.name}</h3>
            <p>
              ₹
              {list?.card?.info?.defaultPrice
                ? list?.card?.info?.defaultPrice / 100
                : list?.card?.info?.price / 100}
            </p>
            <p className="text-sm py-3 text-gray-500">
              {list?.card?.info?.description}
            </p>
          </div>
          <div className="h-auto rounded-sm w-3/12 relative">
            <img
              src={`${IMAGE_URL}${list?.card?.info?.imageId}`}
              className="rounded-md"
            />
            <div className="absolute top-2/3 left-1/3">
              <button
                className="text-green-500  bg-white rounded-md border border-gray-200 py-1 px-2"
                onClick={() => handleAddItem(list)}
              >
                Add +{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="h-1 w-auto bg-gray-300 mt-3 mb-5"></div>
      </div>
    </div>
  );
};

export default ItemList;
