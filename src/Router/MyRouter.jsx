import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/error/ErrorPage";
import Login from "../Pages/Account/Login";
import Registration from "../Pages/Account/Registration";
import Home from "../Pages/Home/Home";
import FoodDetail from "../Pages/Home/Foods/FoodDetail";
import Available from "../Pages/Home/AvailableFoods.jsx/Available";

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
      {
        path: "/food/:id",
        element: <FoodDetail />,
        loader: ({ params }) =>
          fetch(`https://food-exchange-bridge.vercel.app/foods/${params.id}`),
      },
      {
        path: "/available",
        element: <Available />,
      },
    ],
  },
]);

export default MyRouter;
