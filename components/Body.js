import React from "react";
import Card from "./Card";
import data from "../constanst/data.json";

export const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="container">
        {data.map((res) => (
          <Card key={res.info.id} data={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
