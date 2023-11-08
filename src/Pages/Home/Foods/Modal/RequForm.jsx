import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../../Provider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";

const RequForm = ({ food }) => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const {
    foodImage,
    foodName,
    donatorName,
    pickupLocation,
    donatorEmail,
    expiredDate,
    status,
  } = food || {};
  const date = moment().format("YYYY-M-D");

  const handleFoodRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const donatorName = form.donator_name.value;
    const donatorEmail = form.donator_email.value;
    const donatedMoney = form.donation.value;
    const pickupLocation = form.pickup_location.value;
    const requesterEmail = form.requester_email.value;
    const requesterName = form.requester_name.value;
    const requestingDate = form.requesting_date.value;
    const note = form.note.value;
    const status = form.status.value;
    const expiredDate = form.expired_date.value;

    const requestedFood = {
      foodName,
      foodImage,
      donatorName,
      donatorEmail,
      donatedMoney,
      pickupLocation,
      requesterEmail,
      requesterName,
      requestingDate,
      note,
      expiredDate,
      status,
    };
    // console.log(requestedFood);

    fetch("https://food-exchange-bridge.vercel.app/foodRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestedFood),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    Swal.fire({
      title: "Thank you for the request",
      text: "We will reach you soon.",
      icon: "success",
    });
  };

  return (
    <div>
      <form method="dialog" className="modal-backdrop">
        {/* closing button */}
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          <AiOutlineClose />
        </button>
      </form>
      <form onSubmit={handleFoodRequest}>
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
            <label className="italic text-pink-700">Requester Email</label>
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
        <div className="grid md:grid-cols-2 md:gap-6">
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
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">User Name</label>
            <input
              type="text"
              disabled
              defaultValue={displayName}
              name="requester_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Expired date</label>
            <input
              type="text"
              name="expired_date"
              disabled
              defaultValue={expiredDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">User Name</label>
            <input
              type="text"
              disabled
              defaultValue={status}
              name="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
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

// Food Name( Not editable )

// ○ Food Id (Not editable)

// ○ Expire Date(not editable)
// ○ Additional Notes (editable
// ○ Donation Money(editable)
// ○ Request Button
