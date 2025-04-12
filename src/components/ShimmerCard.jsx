const ShimmerCard = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer shimmer-image"></div>
            <div className="shimmer shimmer-line long"></div>
            <div className="shimmer shimmer-line medium"></div>
            <div className="shimmer shimmer-line short"></div>
            <div className="shimmer shimmer-line medium"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;
