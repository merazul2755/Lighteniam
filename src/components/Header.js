import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="xl:px-[55px] xl:py-10  py-4 px-5 bg-white">
        <div className=" mx-auto max-w-[1440px] ">
          {/* <!-- lg+ --> */}
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" className="flex">
                <h1 className="text-[33px] font-muli font-bold text-[#313131]">
                  Lighteniam
                </h1>
              </a>
            </div>

            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className="inline-flex z-50 p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-8 h-8 ${menu === false ? "block" : "hidden"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className={`w-8 h-8 ${menu === true ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-6 font-nunito">
              <Link
                to="/home"
                className="font-normal text-[#313131] text-[15px] transition-all duration-500 p-4 hover:bg-gray-100 hover:rounded-lg focus:bg-gray-100 focus:rounded-lg"
              >
                Home
              </Link>

              <button
                onClick={() => setDropdown(!dropdown)}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-center inline-flex items-center font-normal text-[#313131] text-[15px] font-nunito duration-500 p-4 hover:bg-gray-100 hover:rounded-lg focus:bg-gray-100 focus:rounded-lg"
                type="button"
              >
                Shop
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <div
                  id="dropdown"
                  className={`relative ${
                    dropdown === true ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 -left-16 w-36 absolute mt-8 rounded-lg shadow z-10 divide-y divide-gray-100">
                    <li>
                      <a href="#" className="block px-4 py-2 ">
                        Shop 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 ">
                        Shop 2
                      </a>
                    </li>
                  </ul>
                </div>
              </button>

              <Link
                to="/home"
                className="font-normal text-[#313131] text-[15px] transition-all duration-500 p-4 hover:bg-gray-100 hover:rounded-lg focus:bg-gray-100 focus:rounded-lg"
              >
                About
              </Link>

              <Link
                to="/"
                className="font-normal text-[#313131] text-[15px] transition-all duration-500 p-4 hover:bg-gray-100 hover:rounded-lg focus:bg-gray-100 focus:rounded-lg"
              >
                Blog
              </Link>
            </div>

            <div className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold  transition-all duration-200 lg:inline-flex space-x-[17px] z-50">
              <Link to="/user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </nav>

          {/* <!-- xs to lg --> */}
          <nav
            className={`pt-4 pb-6 bg-white rounded-md shadow-md lg:hidden ${
              menu === true ? "block" : "hidden"
            }`}
          >
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1 font-nunito">
                <Link
                  to="/home"
                  className="inline-flex py-2 text-base font-medium text-[#313131] text-[15px] transition-all duration-200 "
                >
                  Home
                </Link>

                <a
                  href="/"
                  className="inline-flex py-2 text-base font-medium text-[#313131] text-[15px] transition-all duration-200 "
                >
                  Shop
                </a>

                <a
                  href="/"
                  className="inline-flex py-2 text-base font-medium text-[#313131] text-[15px] transition-all duration-200 "
                >
                  About
                </a>

                <a
                  href="/"
                  className="inline-flex py-2 text-base font-medium text-[#313131] text-[15px] transition-all duration-200 "
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
