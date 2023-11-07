import { Link } from "react-router-dom";
import error from "../../assets/ErrorAnimation.json";
import { AiOutlineRollback } from "react-icons/ai";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className=" max-h-[100vh]">
      <div className="text-3xl ">
        <Link to="/">
          <AiOutlineRollback className="inline-block" />
          Back to Home
        </Link>
      </div>
      <Lottie style={{ height: "100vh" }} animationData={error} />
    </div>
  );
};

export default ErrorPage;
<h1>error</h1>;
