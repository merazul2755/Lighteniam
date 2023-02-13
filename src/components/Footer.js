import React from "react";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col mx-auto max-w-[1440px] h-auto ">
          <div className="flex lg:justify-between flex-col lg:flex-row py-10 lg:py-16 px-[15px] sm:px-[30px] md:px-[30px] xl:px-[70px] w-full h-auto lg:h-[371px] bg-[#FAFAFA]">
            <div className="lg:w-4/12 text-black">
              <div className=" mb-6 font-nunitoSans text-base font-semibold ">
                About your store
              </div>

              <div className="font-nunitoSans text-base font-light mb-4 leading-5">
                We dare to be different and we invite you to do the same. We'd
                love you to join us on this colourful adventure of being you.
                You are here to be yourself. Fully and unapologetically.
              </div>
              <div className="mb-6 font-nunitoSans text-base font-light">
                Now, let's show to the world what we are made of!
              </div>
              <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row w-full h-[60px] ">
                <ul className="flex gap-[15px] text-gray-600 cursor-pointer">
                  <li className="ease-in duration-200 hover:text-gray-400">
                    <i className="fa-brands fa-xl fa-twitter"></i>
                  </li>

                  <li className="ease-in duration-200 hover:text-gray-400">
                    <i className="fa-brands fa-xl fa-facebook"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-evenly flex-wrap lg:flex-nowrap gap-x-[90px] sm:gap-x-0 gap-5 xl:gap-28 lg:gap-8 lg:w-7/12">
              <div className="text-center sm:text-left">
                <div className="mb-6 font-nunitoSans text-base font-semibold select-none w-[102px]">
                  Helpful Links
                </div>

                <ul className="flex flex-col gap-4 font-nunitoSans text-base font-light">
                  <a className="hover:underline" href="#">
                    <li>Home</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Shop</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>About</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Blog</li>
                  </a>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <div className="mb-6 font-nunitoSans text-base font-semibold select-none w-[139px]">
                  Quick Shop
                </div>

                <ul className="flex flex-col gap-4 font-nunitoSans text-base font-light">
                  <a className="hover:underline" href="#">
                    <li>Blended Smoothies</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Juices</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Original Smoothies</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Seasonal Favorites</li>
                  </a>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <div className="mb-6 font-nunitoSans text-base font-semibold select-none">
                  Let's stay in touch
                </div>
                <div className="mb-[29px] font-nunitoSans text-base font-light leading-5">
                  Sign up for exclusive offers, original stories, events and
                  more.
                </div>
                <input
                  className="h-10 w-80 p-4 mb-6 border border-black bg-[#FAFAFA]"
                  type="text"
                  placeholder="Enter your email address"
                />
                <button className="btn bg-black text-white h-12 w-[200px] font-nunitoSans font-semibold leading-[18px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
