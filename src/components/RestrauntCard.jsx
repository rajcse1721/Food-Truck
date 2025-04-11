//instead of doing hardcording
// const BurgerKing = {
//   Name: "Burger King",
//   Image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/5cc80528-07c3-4cb7-995f-db3843e8f22e_672074.JPG",
//   Cusines: ["classic", "American"],
//   Rating: 4.3,
// };
//import { IMAGE_URL } from "./Config";

const RestrauntCard = (props) => {
  const restaurantInfo = props.restraunt.card.card.info;
  return (
    <div className="card">
      <img
        alt={restaurantInfo.name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`}
      />
      <h2>{restaurantInfo?.name}</h2>
      <h3>{restaurantInfo?.cuisines.join(", ")}</h3>
      <h4>{restaurantInfo?.avgRating} stars</h4>
      <p>{restaurantInfo?.costForTwo}</p>
      <p>
        {restaurantInfo?.areaName}, {restaurantInfo.locality}
      </p>
    </div>
  );
};

export default RestrauntCard;
