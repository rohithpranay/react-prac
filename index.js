import React from "react";
import ReactDOM from "react-dom/client";

const fakeSwiggyData = [
  {
    id: 1,
    name: "Delicious Delights",
    cuisine: ["Biriyani", "South Indian"],
    rating: 4.4,
    deliveryTime: 38,
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Tasty Treats",
    cuisine: ["Chinese", "Fast Food"],
    rating: 4.2,
    deliveryTime: 25,
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Pizza Palace",
    cuisine: ["Italian", "Pizza"],
    rating: 4.6,
    deliveryTime: 30,
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Sizzling Sizzlers",
    cuisine: ["Steakhouse", "Continental"],
    rating: 4.8,
    deliveryTime: 45,
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Healthy Bites",
    cuisine: ["Salads", "Healthy"],
    rating: 4.5,
    deliveryTime: 35,
    logo: "https://via.placeholder.com/150",
  },
];
console.log(fakeSwiggyData);

const Header = () => {
  return (
    <div id="nav-container">
      <img
        id="nav-img"
        src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-app-logo-by-lepchik-dribbble.png"
      />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>ContactUs</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const RestaurantCard = (data) => {
  let { name, cuisine, rating, deliveryTime } = data.data;
  console.log(name);
  console.log(cuisine);
  console.log(rating);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffe4084febdec52732dffd3624f4e6c1"
      />
      <h3>{name}</h3>
      <h3>{cuisine}</h3>
      <h3>{rating}</h3>
      <h3>{deliveryTime} mins</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {fakeSwiggyData.map((restaurant) => {
          return <RestaurantCard data={restaurant} />;
        })}
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
