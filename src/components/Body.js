import RestaurantCard from "./RestaurantCard";
import fakeSwiggyData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [restaurantData, setRestaurantData] = useState(fakeSwiggyData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            let filteredData = restaurantData.filter(
              (res) => res.ratings > 4.3
            );
            setRestaurantData(filteredData);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantData.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
