import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

export const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (error) {
    toast.warning(error?.message);
  } else {
    toast.success("Log In Successful");
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }
  return (
    <div className="max-w-[1440px] m-auto xl:mb-48 mb-36 mt-16 md:mb-36 xl:mt-28 md:mt-20 px-5 md:px-0">
      <div className="max-w-2xl text-black bg-white m-auto w-full">
        <div className="text-[40px] mb-10 ">Login</div>

        <form
          onSubmit={handleLogin}
          className="grid grid-cols-2 gap-6 max-w-2xl m-auto"
        >
          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Enter your email address"
              name="email"
              required
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <input
              type="password"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Enter your password"
              name="password"
              required
            />
            <Link to="/recoverPass">
              <p className="mt-2 font-nunitoSans text-sm text-[#000000CC]">
                Forget Password
              </p>
            </Link>
          </div>

          <div className="col-span-2">
            <button className="py-4 px-[70px] bg-transparent hover:bg-gray-100 transform motion-safe:hover:scale-105 text-black border border-1 border-black font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
              Sign In
            </button>
            <Link to="/signup">
              <p className="mt-2 font-nunitoSans text-sm text-[#000000CC] hover:text-blue-600">
                Create Account
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
