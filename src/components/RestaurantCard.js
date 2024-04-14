const RestaurantCard = (data) => {
  let { name, cuisine, ratings, deliveryTime = 20 } = data?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffe4084febdec52732dffd3624f4e6c1"
      />
      <h3>{name}</h3>
      <h3>{cuisine}</h3>
      <h3>{ratings}</h3>
      <h3>{deliveryTime} mins</h3>
    </div>
  );
};

export default RestaurantCard;
