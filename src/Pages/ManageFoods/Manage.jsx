import { useContext, useState } from "react";
import { useEffect } from "react";
import ManageFoods from "./ManageFoods";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Manage = () => {
  const { user } = useContext(AuthContext);
  const [manageFoods, setManageFoods] = useState([]);
  const url = `https://food-exchange-bridge.vercel.app/myfoods?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setManageFoods(data);
      });
  }, [url]);
  //delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Do you want to delete your added food?",
      showDenyButton: true,
      confirmButtonText: "Go Ahead",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://food-exchange-bridge.vercel.app/myfoods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Food request cancelled", "", "success");
              const remainingData = manageFoods.filter((i) => i._id !== id);
              setManageFoods(remainingData);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Added food is not deleted", "", "info");
      }
    });
  };

  //manage

  return (
    <div>
      <Helmet>
        <title>FEB|Manage My Foods</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>ExPiry date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="space-y-5">
            {manageFoods.map((food) => (
              <ManageFoods
                key={food._id}
                food={food}
                handleDelete={handleDelete}
              ></ManageFoods>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
