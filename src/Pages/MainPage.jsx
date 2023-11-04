import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
// import Header from "../Components/Shared/Header";

const MainPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
