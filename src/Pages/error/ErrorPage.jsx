import { Link } from "react-router-dom";
import error from "../../assets/ErrorAnimation.json";
import { AiOutlineRollback } from "react-icons/ai";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className=" max-h-[100vh]">
      <Helmet>
        <title>FEB|Error Page</title>
      </Helmet>
      <div className="text-3xl ">
        <Link to="/">
          <AiOutlineRollback className="inline-block" />
          Back to Home
        </Link>
      </div>
      <Lottie style={{ height: "94vh"}} animationData={error} speed={0.2}/>
    </div>
  );
};

export default ErrorPage;
<h1>error</h1>;
