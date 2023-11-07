import { useLoaderData } from "react-router-dom";

const FoodDetail = () => {
  const food = useLoaderData();
  console.log(food);
  const {
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    note,
    _id,
  } = food || {};
  return (
    <div className="flex">
      <img src={foodImage} alt="" />
      <div>
        
      </div>
    </div>
  );
};

export default FoodDetail;
