// import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/available">Available Foods</Link>
      </li>
      <li>
        <Link to="/addFood">Add Food</Link>
      </li>
      <li>
        <Link to="/manage">Manage My Foods</Link>
      </li>
      <li>
        <Link to="/request">My Food Request</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="h-[100px] navbar rounded-lg shadow-md mt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenuUnfold className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://i.ibb.co/Fhpp50V/logo-removebg-preview.png"
              className="h-10 md:h-20 mr-3"
              alt="logo"
            />
            <span className="text-sm md:text-2xl md:font-semibold">
              Food Bridge Exchange
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
