import { useEffect, useState } from "react";
import AvailableFoods from "./AvailableFoods";

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
  return (
    <>
      <h1 className=" text-6xl block text-center font-bold italic text-cyan-700 my-5">
        Discover a Variety of Available
        <span className="text-pink-900"> Surplus</span> Options
      </h1>
      <div className="join flex flex-row justify-center items-center my-5">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Functionality
          </option>
          <option>Sort by expiry date</option>
          <option>Search by food name</option>
        </select>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
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
