const FoodRequest = ({ food }) => {
  const { _id, requesterEmail, requesterName, requestingDate, status } =
    food || {};
  return (
    <div>
      {requesterEmail}
    </div>
  );
};

export default FoodRequest;
