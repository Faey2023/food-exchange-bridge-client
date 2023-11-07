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
        <h1 className=" text-6xl block text-center font-bold italic text-cyan-700 my-5">
          Our
          <span className="text-pink-900"> Trusted</span> Allies in the Fight
          Against Food Waste
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
