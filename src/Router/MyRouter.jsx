import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/error/ErrorPage";
import Login from "../Pages/Account/Login";
import Registration from "../Pages/Account/Registration";
import Home from "../Pages/Home/Home";
import FoodDetail from "../Pages/Home/Foods/FoodDetail";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/Home/Forms/AddFood";
import Available from "../Pages/AvailableFoods.jsx/Available";
// import Manage from "../Pages/ManageFoods/Manage";
import Request from "../Pages/Request/Request";

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
        element: (
          <PrivateRoute>
            <FoodDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-exchange-bridge.vercel.app/foods/${params.id}`),
      },
      {
        path: "/available",
        element: <Available />,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/manage",
      //   element: (
      //     <PrivateRoute>
      //       <Manage />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/request",
        element: (
          <PrivateRoute>
            <Request />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MyRouter;
