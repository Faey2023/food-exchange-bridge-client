import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SocialButton = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleLogin = (data) => {
    data()
      .then((res) => {
        toast.success("User Created successfully");
      })
      .catch((err) => {
        toast(err.code);
      });
  };

  return (
    <div>
      <div className=" divider">Or</div>
      <button
        onClick={() => handleLogin(googleLogin)}
        className="block w-full select-none rounded-lg bg-gradient-to-tr from-red-600 to-red-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <FaGoogle className=" inline-block text-xl mr-5" />
        Log in With Google
      </button>
    </div>
  );
};

export default SocialButton;
