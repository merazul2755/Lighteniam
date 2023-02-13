import React from "react";
import { Link } from "react-router-dom";

const RecoverPass = () => {
  return (
    <div className="max-w-[1440px] m-auto xl:mb-48 mb-36 mt-16 md:mb-36 xl:mt-28 md:mt-20 px-5 md:px-0">
      <div className="max-w-xl bg-white m-auto w-full lg:px-16">
        <div className="text-[40px] mb-10 ">Recover Password</div>

        <form className="grid grid-cols-1 gap-6 max-w-xl m-auto">
          <div className="col-span-2 md:col-span-1">
            <p className="font-nunitoSans text-sm text-[#000000CC] mb-4">
              Please enter your email and we will send you a password reset
              link.
            </p>
            <input
              type="email"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="col-span-2">
            <button className="py-4 px-[70px] bg-transparent hover:bg-gray-100 transform motion-safe:hover:scale-105 text-black border border-1 border-black font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
              Reset Password
            </button>
            <Link to="/signup">
              <p className="mt-2 font-nunitoSans text-sm text-[#000000CC] hover:text-red-600">
                Cancel
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPass;
