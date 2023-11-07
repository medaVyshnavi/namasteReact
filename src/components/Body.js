import React, { useState, useEffect } from "react";
import Card, { PromotedCard } from "./Card";
import ShimmerUI from "./ShimmerUI";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const onlineStatus = useOnlineStatus();

  const EnhancedCard = PromotedCard(Card);

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
      <div className="flex items-center my-8 mx- px-14">
        <div className="border-solid border-current">
          <input
            className="border-solid border-current border-[1px] rounded-lg py-1"
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            className="bg-green-100 px-3 py-2 rounded-lg ml-2"
            onClick={filterHandler}
          >
            Search
          </button>
        </div>
        <div className="bg-green-100 px-3 py-2 rounded-lg ml-2">
          <button onClick={getTopRatingFilters}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredValues?.length > 0 ? (
          filteredValues.map((res) => (
            <div key={res.info.id}>
              <Link to={`menu/${res.info.id}`}>
                {res.info.veg ? (
                  <EnhancedCard data={res.info} />
                ) : (
                  <Card data={res.info} />
                )}
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

const withPromotedTag = () => {
  return {};
};

export default Body;
