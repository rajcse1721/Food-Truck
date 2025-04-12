const RestrauntCard = ({ restraunt }) => {
  //const restaurantInfo = props.restraunt.card.card.info;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    locality,
  } = restraunt?.info || {};
  // //= restraunt?.info || {};
  return (
    <div className="card">
      <img
        alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <p>{costForTwo}</p>
      <p>
        {areaName}, {locality}
      </p>
    </div>
  );
};

export default RestrauntCard;
