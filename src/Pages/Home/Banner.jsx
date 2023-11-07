import Lottie from "lottie-react";
import banner from "../../assets/banner.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div
        className="m-3 hero min-h-[calc(100vh-130px)]"
        style={{
          backgroundImage: "url(https://i.ibb.co/SRFhVtg/b.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <h1 className="mb-5 text-7xl font-bold italic">
                Together,
                <br />
                <span className="text-gray-400">We share</span>
              </h1>
              <p className="mb-5 text-xl font-semibold">
                Join our community in reducing food waste and feeding those in
                need.
              </p>
              <Link to="/social" className="btn btn-outline text-white">
                Join our Community
              </Link>
            </div>
            <div className="flex-1">
              <Lottie
                animationData={banner}
                style={{ height: "50vh" }}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
