import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../../Provider/AuthProvider";
import moment from "moment";

const RequForm = ({ food }) => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const {
    foodImage,
    foodName,
    donatorName,
    pickupLocation,
    donatorEmail,
  } = food || {};
  const date = moment().format("D-M-YYYY");

  const handleFoodRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const donatorName = form.donator_name.value;
    const donatorEmail = form.donator_email.value;
    const pickupLocation = form.pickup_location.value;
    const requesterEmail = form.requester_email.value;
    const requestingDate = form.requesting_date.value;
    const note = form.note.value;
    const requestedFood = {
      foodName,
      foodImage,
      donatorName,
      donatorEmail,
      pickupLocation,
      requesterEmail,
      requestingDate,
      note,
    };
    console.log(requestedFood);

    fetch("https://food-exchange-bridge.vercel.app/foodRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestedFood),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form method="dialog">
        {/* closing button */}
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          <AiOutlineClose />
        </button>
      </form>
      <form onSubmit={handleFoodRequest}>
        <h1 className="text-lg underline">Donator Details</h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Food Name</label>
            <input
              type="text"
              name="food_name"
              defaultValue={foodName}
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Donator Name</label>
            <input
              type="text"
              name="donator_name"
              defaultValue={donatorName}
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Donator Email</label>
            <input
              type="text"
              defaultValue={donatorEmail}
              disabled
              name="donator_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Pickup Location</label>
            <input
              type="text"
              name="pickup_location"
              defaultValue={pickupLocation}
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <h1 className="text-lg underline">Requester Details</h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">User Email</label>
            <input
              type="text"
              defaultValue={email}
              disabled
              name="requester_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Requesting Date</label>
            <input
              disabled
              name="requesting_date"
              defaultValue={date}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Additional notes</label>
            <input
              type="text"
              name="note"
              placeholder="Write anything you want to say..."
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Donation Amount</label>
            <input
              type="number"
              placeholder="If You want to donate some money."
              name="donation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <label className="italic text-pink-700">Food Image</label>
          <input
            type="text"
            name="food_image"
            disabled
            defaultValue={foodImage}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-700 rounded-lg text-xl font-semibold w-full px-5 py-2.5 text-center "
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default RequForm;

// ○ Request Date(current time not editable)
