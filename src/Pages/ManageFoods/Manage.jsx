import { useContext, useState } from "react";
import { useEffect } from "react";
import ManageFoods from "./ManageFoods";
import { AuthContext } from "../../Provider/AuthProvider";

const Manage = () => {
  const { user } = useContext(AuthContext);
  const [manageFoods, setManageFoods] = useState([]);
  const url = `https://food-exchange-bridge.vercel.app/myfoods?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [url]);

  return (
    <div>
      {manageFoods.map((food) => (
        <ManageFoods key={food._id} food={food}></ManageFoods>
      ))}
    </div>
  );
};

export default Manage;
