import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Nav from "../Components/Shared/Nav";
// import Header from "../Components/Shared/Header";

const MainPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Nav />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
