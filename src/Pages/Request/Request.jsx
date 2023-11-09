import { useEffect } from "react";
import { useState } from "react";
import FoodRequest from "./FoodRequest";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Request = () => {
  const { user } = useContext(AuthContext);
  const [foodRequest, setFoodRequest] = useState([]);

  const url = `https://food-exchange-bridge.vercel.app/request?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoodRequest(data);
      });
  }, [url]);

  //
  const handleCancel = (id) => {
    console.log(id);

    Swal.fire({
      title: "Do you want cancel the request?",
      showDenyButton: true,
      confirmButtonText: "Go Ahead",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://food-exchange-bridge.vercel.app/foodRequest/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Food request cancelled", "", "success");
              const remainingData = foodRequest.filter((i) => i._id !== id);
              setFoodRequest(remainingData);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>FEB |Food Request</title>
      </Helmet>
      <div className="overflow-x-auto my-5">
        <table className="table table-xs md:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Donator Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Donation Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {foodRequest.map((food) => (
              <FoodRequest
                key={food._id}
                food={food}
                handleCancel={handleCancel}
              ></FoodRequest>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
