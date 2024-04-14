import RestaurantCard from "./RestaurantCard";
import fakeSwiggyData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {fakeSwiggyData.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
