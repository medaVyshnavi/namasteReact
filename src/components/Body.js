import React, { useState } from "react";
import Card from "./Card";
import data from "../../constanst/data.json";

export const Body = () => {
  const [resData, setResData] = useState(data);

  const getTopRatingFilters = () => {
    const results = resData.filter((res) => res.info.avgRating >= 4.5);
    setResData(results);
  };
  return (
    <div>
      <div className="search">
        <button onClick={getTopRatingFilters}>Top Rated Restaurants</button>
      </div>
      <div className="container">
        {resData.map((res) => (
          <Card key={res.info.id} data={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
