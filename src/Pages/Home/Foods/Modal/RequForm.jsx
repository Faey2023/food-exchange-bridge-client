import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../../Provider/AuthProvider";
import moment from "moment";

const RequForm = ({ food }) => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const {
    _id,
    foodImage,
    foodName,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    note,
    donatorEmail,
  } = food || {};
  const date = moment().format("D-M-YYYY");

  return (
    <div>
      <form method="dialog">
        {/* closing button */}
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          <AiOutlineClose />
        </button>
        <div className="flex gap-5">
          <img src={foodImage} className="avatar w-40 rounded" alt="" />
          <div>
            <h3 className="text-pink-700 text-2xl">{foodName}</h3>
            <p className="text-2xl">Food Id: {_id}</p>
          </div>
        </div>
      </form>
      <form>
        <h1 className="text-lg underline">Donator Details</h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Food Name</label>
            <input
              type="text"
              defaultValue={foodName}
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Donator Name</label>
            <input
              type="text"
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
              placeholder="Your Phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Pickup Location</label>
            <input
              type="text"
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
              placeholder="Your Phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Requesting Date</label>
            <input
              disabled
              defaultValue={date}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">
              Note from the Donator
            </label>
            <input
              type="text"
              name="Additional notes"
              placeholder="Additional notes"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            />
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <label className="italic text-pink-700">Donation Amount</label>
            <input
              type="number"
              placeholder="donation"
              name="donation"
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

// ○ Request Date(current time not editable)
