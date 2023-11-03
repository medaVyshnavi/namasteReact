import React, { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI";
// import data from "../../constanst/data.json"; replaced with live data

export const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setResData(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredValues(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const getTopRatingFilters = () => {
    const results = resData.filter((res) => res.info.avgRating >= 4.5);
    setFilteredValues(results);
  };

  const filterHandler = () => {
    if (searchFilter === "") {
      setFilteredValues(resData);
    } else {
      const result = resData.filter((res) =>
        res.info.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
      setFilteredValues(result);
    }
  };

  return resData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="component">
        <div className="filter">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button onClick={filterHandler}>Search</button>
        </div>
        <div className="topRated">
          <button onClick={getTopRatingFilters}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="container">
        {filteredValues.length > 0 ? (
          filteredValues.map((res) => (
            <Card key={res.info.id} data={res.info} />
          ))
        ) : (
          <div>No results Found</div>
        )}
      </div>
    </div>
  );
};

export default Body;
