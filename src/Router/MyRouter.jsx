import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default MyRouter;
