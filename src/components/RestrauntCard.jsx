import React from "react";
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
    <div className="flex flex-wrap justify-center gap-5 p-5">
      <div className="w-[260px] border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md cursor-pointer text-left transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-lg">
        <img
          alt={name}
          className="w-full aspect-video object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h2 className="text-lg font-semibold text-gray-800 m-2.5">{name}</h2>
        <h3 className="text-base font-normal text-gray-600 mx-2.5">
          {cuisines?.join(", ")}
        </h3>
        <h4 className="text-sm text-gray-700 m-2.5">{avgRating} stars</h4>
        <p className="text-md text-gray-900 mx-2.5 mb-2.5">{costForTwo}</p>
        <p className="text-sm text-gray-500 mx-2.5 mb-2.5">
          {areaName}, {locality}
        </p>
      </div>
    </div>
  );
};

export default RestrauntCard;
