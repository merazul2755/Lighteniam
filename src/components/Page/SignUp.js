import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (error) {
      return toast.warning(error?.message);
    }

    if (/@g(oogle)?mail\.com$/.test(email)) {
      await createUserWithEmailAndPassword(email, password);
      await fetch(
        "https://lighteniam-91d91-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            password,
          }),
        }
      );
      navigate("/");
    } else {
      toast.warning("Email shoud be like test@gmail.com");
    }
  };
  return (
    <div className="max-w-[1440px] m-auto xl:mb-48 md:mb-36 xl:mt-28 md:mt-20 px-5 md:px-0">
      <div className="max-w-2xl text-black bg-white m-auto w-full">
        <div className="text-[40px] font-normal mb-10 ">
          Register Your Account
        </div>

        <form
          onSubmit={handleCreateAccount}
          className="grid grid-cols-2 gap-x-6 gap-y-8 max-w-2xl m-auto"
        >
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="First Name"
              name="fname"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Last Name"
              name="lname"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <input
              type="password"
              className="border border-[#00000080] p-4 font-nunitoSans w-full text-sm"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <div className="col-span-2">
            <button className="py-4 px-[70px] bg-transparent hover:bg-gray-100 transform motion-safe:hover:scale-105 text-black border border-1 border-black font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
              Sign Up
            </button>
            <Link to="/">
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

export default SignUp;
