import { RestrauntList } from "./RestrauntList";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.card.card.info.name
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  //create local state variable in react
  const [searchInput, setSearchInput] = useState();
  const [restaurants, setRestaurants] = useState(RestrauntList);

  return (
    <>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, RestrauntList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restrauntant-list">
        {
          //using map
          restaurants.map((restraunt, index) => {
            return <RestrauntCard key={index} restraunt={restraunt} />;
          })
        }
      </div>
    </>
  );
};

export default Body;
