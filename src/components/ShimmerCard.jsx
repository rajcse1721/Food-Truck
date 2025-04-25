import React from "react";
const ShimmerCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            className="w-[260px] border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md pb-2.5"
            key={index}
          >
            <div className="h-[160px] w-full bg-gray-200 shimmer"></div>
            <div className="h-4 bg-gray-200 my-2.5 mx-2.5 rounded"></div>
            <div className="h-4 bg-gray-200 my-2.5 mx-2.5 rounded w-1/2"></div>
            <div className="shimmer shimmer-line short"></div>
            <div className="shimmer shimmer-line medium"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;
