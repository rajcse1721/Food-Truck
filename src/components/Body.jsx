import { RestrauntList } from "./RestrauntList";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import useOnline from "../utils/useOnline";

const Body = () => {
  //create local state variable in react
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //useEffect
  useEffect(() => {
    getRestaurants();
  }, []);

  const Online = useOnline();
  if (!Online) {
    return <h1>🔴Offline,Please check your internet connectivity !!!</h1>;
  }

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await response.json();

    const allCards = json?.data?.cards || [];

    // Filter only those with restaurant info
    const restaurantCards = allCards
      .map((card) => card?.card?.card)
      .filter((item) => item?.info);

    console.log("Filtered Restaurants:", restaurantCards);
    setAllRestaurants(restaurantCards);
    setFilteredRestaurants(restaurantCards);
  }

  function filterData(searchInput, allRestaurants) {
    return allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return allRestaurants?.length === 0 ? (
    <ShimmerCard />
  ) : (
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
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restrauntant-list">
        {filteredRestaurants.length === 0 ? (
          <>
            <h3>😔Oops, NO RESULTS FOUND.</h3>
            <br />
            <p>
              Sorry, we can't find any Restaurants that match your filters.{" "}
              <br />
              Please clear your selected filters and try again.
            </p>
          </>
        ) : (
          //using map
          filteredRestaurants.map((restraunt, index) => (
            <RestrauntCard
              key={restraunt?.info?.id || index}
              restraunt={restraunt}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
