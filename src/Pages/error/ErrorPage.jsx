import error from "/public/ErrorAnimation.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className=" max-h-[100vh]">
      <Lottie style={{ height: "100vh" }} animationData={error} />
    </div>
  );
};

export default ErrorPage;
<h1>error</h1>;
