const FoodRequest = ({ food,handleCancel }) => {
  const {
    _id,
    donatorName,
    pickupLocation,
    expiredDate,
    requestingDate,
    donatedMoney,
    status,
  } = food || {};

  //
 

  return (
    <>
      <tr className="space-y-3 text-xl">
        <th>{donatorName} </th>
        <td>{pickupLocation}</td>
        <td>{expiredDate}</td>
        <td>{requestingDate}</td>
        <td>{donatedMoney}</td>
        <td>{status}</td>
        <td>
          <button
            onClick={() => handleCancel(_id)}
            className="btn text-cyan-900 btn-outline btn-xs md:btn-md"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default FoodRequest;
