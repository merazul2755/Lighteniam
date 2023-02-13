import React from "react";
import juice from "../../images/Capture2.PNG";
import juice2 from "../../images/Capture3.PNG";
import juice3 from "../../images/Capture4.PNG";
import juice4 from "../../images/Capture5.PNG";

export const Gallery = () => {
  return (
    <div>
      <section className="overflow-hidden max-w-[1440px] m-auto md:mb-[60px]">
        <div className="container px-5 py-2 mx-auto lg:px-[70px]">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap md:w-1/2 w-full">
              <div className="w-full p-1 md:p-2 relative">
                <div className="bg-black">
                  <img
                    alt="gallery"
                    className="block object-cover object-center h-[316px] md:w-[642px] md:h-[316px] opacity-80"
                    src={juice}
                  />
                </div>
                <div className="absolute bottom-10 left-10 right-10 ">
                  <h1 className="font-muli font-bold text-xl text-white mb-4">
                    Juices
                  </h1>
                  <p className="font-nunitoSans font-medium text-base text-white mb-4">
                    This smoothie totally changed my world. Our juices are made
                    from the freshest fruits and natural ingredients.{" "}
                  </p>
                  <button className="w-52 h-12 btn bg-white text-black transform motion-safe:hover:scale-105   font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 w-full p-1 md:p-2 relative">
                <div className="bg-black">
                  <img
                    alt="gallery"
                    className="block  object-center w-full md:w-[313px] h-[316px] opacity-80"
                    src={juice2}
                  />
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h1 className="font-muli font-bold text-xl text-white mb-4">
                    Smoothies
                  </h1>
                  <p className="font-nunitoSans font-medium text-base text-white mb-4">
                    Very good for a Saturday morning breakfast!
                  </p>
                  <button className="w-52 h-12 btn bg-white text-black transform motion-safe:hover:scale-105   font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 w-full p-1 md:p-2 relative">
                <div className="bg-black">
                  <img
                    alt="gallery"
                    className="block  object-center w-full md:w-[313px] h-[316px] opacity-80"
                    src={juice3}
                  />
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h1 className="font-muli font-bold text-xl text-white mb-4">
                    Shakes
                  </h1>
                  <p className="font-nunitoSans font-medium text-base text-white mb-4">
                    Weirdly really good. These flavors work really well
                    together.
                  </p>
                  <button className="w-52 h-12 btn bg-white text-black transform motion-safe:hover:scale-105   font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2 w-full relative">
              <div className="w-full p-1 md:p-2">
                <div className="bg-black">
                  <img
                    alt="gallery"
                    className="block object-center w-full md:h-[648px] h-[316px] opacity-80"
                    src={juice4}
                  />
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h1 className="font-muli font-bold text-xl text-white mb-4">
                    Seasonal Favorites
                  </h1>
                  <p className="font-nunitoSans font-medium text-base text-white mb-4">
                    The best of fresh, seasonal ingredients create healthy and
                    satisfying breakfast smoothies all year round. Spring is
                    here, which means we're harvesting fresh fruits and veggies
                    for our seasonal favorites!
                  </p>
                  <button className="w-52 h-12 btn bg-white text-black transform motion-safe:hover:scale-105   font-semibold font-nunitoSans text-sm text-[#000000CC] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
