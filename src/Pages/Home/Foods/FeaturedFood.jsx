import { useEffect } from "react";
import { useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";

const FeaturedFood = () => {
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
        Showcasing Excess Delights for a
        <span className="text-pink-900"> Sustainable</span> Community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedFood;
