import { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import AvailableFoods from "./AvailableFoods";

const Available = () => {
  const [foods, setFoods] = useState([]);
  const [filteredData, setFilteredData] = useState(foods);
  const [searchValue, setSearchValue] = useState("");
  console.log(filteredData);
  useEffect(() => {
    setFilteredData(foods);
  }, [foods]);
  const url = "https://food-exchange-bridge.vercel.app/foods";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  console.log(foods);
  //search
  const handleSearch = (search) => {
    const searchResult = foods.filter((i) =>
      i.foodName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilteredData(searchResult);
  };
  const handleSortA = () => {
    const sortedData = [...foods].sort((a, b) =>
      a.expiredDate.localeCompare(b.expiredDate)
    );
    setFoods(sortedData);
  };
  const handleSortD = () => {
    const sortedData = [...foods].sort((a, b) =>
      b.expiredDate.localeCompare(a.expiredDate)
    );
    setFoods(sortedData);
  };

  return (
    <>
      <Helmet>
        <title>FEB |Available Foods</title>
      </Helmet>
      <h1 className=" text-6xl block text-center font-bold italic text-cyan-700 my-5">
        Discover a Variety of Available
        <span className="text-pink-900"> Surplus</span> Options
      </h1>
      <div className="flex flex-row justify-between">
        <div className="join flex flex-row justify-center items-center my-5">
          <div>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              name="search_button"
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
          <div className="indicator">
            <button
              onClick={() => handleSearch(searchValue)}
              className="btn join-item"
            >
              Search
            </button>
          </div>
        </div>
        <div className="join join-vertical">
          <button onClick={handleSortA} className="btn btn-accent text-white">
            Sort by expiry date ascending
          </button>
          <button
            onClick={handleSortD}
            className="btn btn-secondary text-white"
          >
            Sort by expiry date descending
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map((food) => (
          <AvailableFoods key={food._id} food={food}></AvailableFoods>
        ))}
      </div>
    </>
  );
};

export default Available;
