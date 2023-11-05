import React, { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RES_API);
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

  if (onlineStatus === false) {
    return "Looks like you are offline please check your internet connection";
  }

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
        {filteredValues?.length > 0 ? (
          filteredValues.map((res) => (
            <div key={res.info.id}>
              <Link to={`menu/${res.info.id}`}>
                <Card data={res.info} />
              </Link>
            </div>
          ))
        ) : (
          <div>No results Found</div>
        )}
      </div>
    </div>
  );
};

export default Body;
