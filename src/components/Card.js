import React from "react";
import { IMAGE_URL } from "../../utils/constants";

export const Card = ({ data }) => {
  const { name, costForTwo, cuisines, sla, cloudinaryImageId, avgRating } =
    data;
  return (
    <div className="card">
      <img src={`${IMAGE_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h6>{costForTwo}</h6>
      <h6>{cuisines?.join(", ")}</h6>
      <h6>{avgRating}</h6>
      <p>{sla?.deliveryTime} mins</p>
    </div>
  );
};

export default Card;
