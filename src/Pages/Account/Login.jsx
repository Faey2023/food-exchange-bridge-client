import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialButton from "../../Components/Shared/SocialButton";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const currentLoc = useLocation();
  const destinedLoc = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        toast.success("User Logged in successfully");
        console.log(res);
        // destinedLoc(currentLoc?.state ? currentLoc.state : "/");
        const user = { email };
        axios
          .post("https://food-exchange-bridge.vercel.app/jwt", user, { withCredentials: true })
          .then((data) => {
            console.log(data.data);
          });
      }) 
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <>
      <Helmet>
        <title>Food Exchange Bridge |Login</title>
      </Helmet>
      <section className="bg-gray-50 mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-100px)] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl ">
                Log in to your account
              </h1>
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <button className="w-full text-white btn bg-gray-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Log in
                </button>
              </form>
              <SocialButton />
              <p className="text-sm font-light text-gray-500 ">
                Don&apos;t have an account?{" "}
                <Link
                  to="/registration"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
