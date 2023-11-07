import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeDets from "./MarqueeDets";

const MarqueeSection = () => {
  const [brands, SetBrands] = useState([]);
  const url = "https://food-exchange-bridge.vercel.app/partners";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetBrands(data);
      });
  }, []);

  return (
    <>
      <div className="my-5">
      <h1 className=" text-3xl flex flex-col text-center font-body italic underline text-gray-700 my-5">
        Our Trusted partners
      </h1>
        <Marquee>
          <div className="flex gap-5">
            {brands.map((brand) => (
              <MarqueeDets brand={brand} key={brand._id}></MarqueeDets>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeSection;
