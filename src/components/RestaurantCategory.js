import React, { useState } from "react";

const RestaurantCategory = (data) => {
  console.log(data, 8);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-6/12 m-auto mt-8">
      <div className="my-5">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between"
        >
          <h3 className="font-bold">
            {data.data?.title} ({data.data?.itemCards?.length})
          </h3>
          <span>{isOpen ? "🔼" : "🔽"}</span>
        </div>
      </div>
      <div>
        <p className="text-left">
          {isOpen ? "sdkhfkdshfjkdshfjkdhsfjkhsdjkfhskjfhjksfhhksh" : ""}
        </p>
      </div>
      {<div className="bg-gray-100 h-5 w-full my-4"></div>}
    </div>
  );
};

export default RestaurantCategory;
