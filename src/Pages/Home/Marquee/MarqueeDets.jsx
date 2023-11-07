const MarqueeDets = ({ brand }) => {
  const {brandImage } = brand || {};
  return (
    <>
      <div className="w-40 h-40 border-2 flex flex-col justify-center items-center">
        <img className="h-32 w-32" src={brandImage} alt="" />
      </div>
    </>
  );
};

export default MarqueeDets;
