import { Link } from "react-router-dom";
import {
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoFacebook,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow-lg border-2 m-4">
        <div className=" max-w-screen-xl mx-auto p-5 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://i.ibb.co/Fhpp50V/logo-removebg-preview.png"
                className="h-20 mr-3"
                alt="logo"
              />
              <span className="text-2xl font-semibold">
                Food Exchange Bridge
              </span>
            </div>
            <div className="flex flex-col">
              {/* important links */}
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="mr-4 hover:underline md:mr-6">
                    Address
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* social media */}
              <ul className="flex mb-6 text-2xl text-gray-500 mt-5 gap-5">
                <li>
                  <Link
                    to="/facebook"
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    <BiLogoFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/insta" className="mr-4 hover:underline md:mr-6">
                    <BiLogoInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin" className="hover:underline">
                    <BiLogoLinkedinSquare />
                  </Link>
                </li>
                <li>
                  <Link to="/twitter" className="hover:underline">
                    <BiLogoTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 {""}
            <Link to="/" className="hover:underline">
              Food Exchange Bridge™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
// absolute right-0 left-0 bottom-0
