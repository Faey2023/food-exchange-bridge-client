import { useEffect, useState } from "react";
import AvailableFoods from "./AvailableFoods";
import { Helmet } from "react-helmet";

const Available = () => {
  const [foods, setFoods] = useState([]);
  const url = "https://food-exchange-bridge.vercel.app/foods";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  //search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchButton = e.target.search_button.value;

    if (searchButton.length) {
      const searchData = foods?.filter(
        (i) => i.foodName.toLowerCase() == searchButton.toLowerCase()
      );
      if (searchData) {
        setFoods(searchData);
      } else {
        setFoods(foods);
      }
    }

    // console.log(searchButton);
  };

  //sorting

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
        <form
          onSubmit={handleSearch}
          className="join flex flex-row justify-center items-center my-5"
        >
          <div>
            <input
              name="search_button"
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </form>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Sort by expiry date
          </option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <AvailableFoods key={food._id} food={food}></AvailableFoods>
        ))}
      </div>
    </>
  );
};

export default Available;
