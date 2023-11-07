import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/error/ErrorPage";
import Login from "../Pages/Account/Login";
import Registration from "../Pages/Account/Registration";
import Home from "../Pages/Home/Home";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default MyRouter;
