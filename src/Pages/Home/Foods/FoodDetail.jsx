import { useLoaderData } from "react-router-dom";
import Modal from "./Modal/Modal";
import { Helmet } from "react-helmet-async";
// import Modal from "./Modal";

const FoodDetail = () => {
  const food = useLoaderData();
  console.log(food);
  const {
    foodImage,
    foodName,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    note,
  } = food || {};
  return (
    <>
    <Helmet>
        <title>FEB |Food Detail</title>
      </Helmet>
    <div className="my-5 card lg:card-side flex flex-col gap-5">
      <figure>
        <img src={foodImage} alt={foodName} />
      </figure>
      <div className="">
        <h2 className="text-5xl">{foodName}</h2>
        <p className="block antialiased leading-relaxed text-gray-700 text-xl ">
          {note}
        </p>
        <p className="block antialiased leading-relaxed text-gray-700 text-xl ">
          Food Sharer:{" "}
          <span className="font-semibold text-cyan-700">{donatorName}</span>
        </p>
        <p className="block antialiased font-normal leading-relaxed text-lg text-gray-700">
          Food Quantity:{" "}
          <span className="text-black font-bold">{foodQuantity}</span>
        </p>
        <p className="block antialiased font-normal leading-relaxed text-lg text-gray-700">
          Pickup Location:{" "}
          <span className="text-black font-bold">{pickupLocation}</span>
        </p>
        <div className="card-actions">
          <Modal food={food} />
        </div>
      </div>
    </div></>
  );
};

export default FoodDetail;
