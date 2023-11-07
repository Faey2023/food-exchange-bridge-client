import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
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
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg bg-white h-[670px] ">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={foodImage} alt={foodName} />
        </div>
        <div className="pr-6 pl-6 pt-6">
          <h5 className="text-3xl font-bold  text-blue-gray-900 text-center mb-2.5">
            {foodName}
          </h5>

          <div className="flex flex-col ">
            <div className="flex flex-row border-2 p-3 border-cyan-500">
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img
                    className="rounded w-20"
                    src={donatorImage}
                    alt={donatorName}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="block antialiased leading-relaxed text-gray-700 text-xl ">
                  Food Sharer:{" "}
                  <span className="font-semibold text-cyan-700">
                    {donatorName}
                  </span>
                </p>
                <p className="block antialiased font-normal leading-relaxed text-lg text-gray-700">
                  Pickup Location:{" "}
                  <span className="text-black font-bold">{pickupLocation}</span>
                </p>
              </div>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
              Note from the Food Sharer:{" "}
              <span className="italic font-semibold">{note}</span>
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
              Food Serving:{" "}
              <span className="text-black font-bold">{foodQuantity}</span>
            </p>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              Expiry Date:{" "}
              <span className="text-black font-bold">{expiredDate}</span>
            </p>
          </div>
        </div>
        <div className="p-6 pt-3">
          <Link
            to={`/food/${_id}`}
            className="block w-full select-none rounded-lg bg-cyan-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
