import MyFoodRequestRoute from "./MyFoodRequestRoute";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const url = `https://food-exchange-bridge.vercel.app/myfoodrequest?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, [url]);

  return (
    <div>
      <Helmet>
        <title>FEB|My Food Request</title>
      </Helmet>
      <table className="table table-xs md:table-lg">
        {/* head */}
        <thead>
          <tr>
            <th>Requester Name</th>
            <th>Requester Email</th>
            <th>Request Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {foods.map((food) => (
            <MyFoodRequestRoute food={food} key={food._id}></MyFoodRequestRoute>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodRequest;
