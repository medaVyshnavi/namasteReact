import React from "react";
import { IMAGE_URL } from "../utils/constants";

export const Card = ({ data }) => {
  const { name, costForTwo, cuisines, sla, cloudinaryImageId, avgRating } =
    data;
  return (
    <div className="w-52 h-[470px] m-4 border-[1px] bg-[#f0f0f0] p-3 rounded-lg">
      <img
        src={`${IMAGE_URL}${cloudinaryImageId}`}
        className="h-52 w-60 rounded-md"
      ></img>
      <div className="mx-4">
        <h3 className="text-lg font-bold text-center my-2">{name}</h3>
        <h6>{costForTwo}</h6>
        <h6>{cuisines?.join(", ")}</h6>
        <h6>{avgRating}</h6>
        <p>{sla?.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default Card;
