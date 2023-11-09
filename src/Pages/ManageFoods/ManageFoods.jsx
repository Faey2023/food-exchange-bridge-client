import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ManageFoods = ({ food, handleDelete }) => {
  const { _id, foodName, expiredDate, status } = food || {};
  console.log(food);

  return (
    <tr className="space-y-5">
      <td>{foodName}</td>
      <td>{expiredDate}</td>
      <td>{status}</td>
      <div className="flex flex-row gap-3 justify-center items-center ">
        <Link
          food={food}
          to="/updatefood"
          className="btn btn-ghost w-15 mb-3"
        >
          <AiOutlineEdit className="text-2xl text-green-700" />
        </Link>
        <button>Manage</button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost w-15 mb-3"
        >
          <AiOutlineDelete className="text-2xl text-red-700" />
        </button>
      </div>
    </tr>
  );
};

export default ManageFoods;
