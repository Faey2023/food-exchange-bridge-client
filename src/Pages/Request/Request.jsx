import { useEffect } from "react";
import { useState } from "react";
import FoodRequest from "./FoodRequest";
import { Helmet } from "react-helmet";

const Request = () => {
  const [foodRequest, setFoodRequest] = useState([]);

  useEffect(() => {
    fetch("https://food-exchange-bridge.vercel.app/foodRequest")
      .then((res) => res.json())
      .then((data) => {
        setFoodRequest(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>FEB |Food Request</title>
      </Helmet>
      {foodRequest.map((food) => (
        <FoodRequest key={food._id} food={food}></FoodRequest>
      ))}
    </div>
  );
};

export default Request;
