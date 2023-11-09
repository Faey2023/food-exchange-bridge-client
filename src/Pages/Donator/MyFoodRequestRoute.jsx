const MyFoodRequestRoute = ({ food }) => {
  const { requesterEmail, requesterName, requestingDate, status } = food || {};
  console.log(food);

  return (
    <>
      <tr className="space-y-3 text-xl">
        <th>{requesterName} </th>
        <td>{requesterEmail}</td>
        <td>{requestingDate}</td>
        <td>{status}</td>
        <td>
          <button className="btn text-pink-600 btn-outline btn-xs md:btn-md">
            Requested
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyFoodRequestRoute;
