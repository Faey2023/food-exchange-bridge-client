import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Nav from "../Components/Shared/Nav";

const MainPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
