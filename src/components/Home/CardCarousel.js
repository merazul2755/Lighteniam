import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import juice from "../../images/juice.jpg";
import orange from "../../images/Capture1.PNG";

const CardCarousel = () => {
  return (
    <>
      <div className="md:mb-12 mb-4 m-auto max-w-[1440px] text-[#313131]">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-5 lg:px-[70px]">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={6}
            visibleSlides={4}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={orange}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-4 focus:outline-none "
                id="next"
              >
                <svg
                  width="50"
                  height="14"
                  viewBox="0 0 50 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.8079 7.65319L44.4231 13.2533C44.0641 13.6266 43.5257 13.6266 43.1667 13.2533C42.8077 12.88 42.8077 12.32 43.1667 11.9466L46.936 7.93317L0.897412 7.93317C0.358887 7.93317 0 7.55988 0 6.99992C0 6.43996 0.359033 6.06666 0.897412 6.06666L46.936 6.06666L43.077 2.05328C42.7179 1.67998 42.7179 1.12002 43.077 0.746534C43.2564 0.559864 43.5257 0.466553 43.7053 0.466553C43.8848 0.466553 44.1541 0.559864 44.3336 0.746534L49.7183 6.34664C50.0773 6.71994 50.0773 7.2799 49.8081 7.65339L49.8079 7.65319Z"
                    fill="black"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={6}
            visibleSlides={3}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={6}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-[350px] h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 justify-center sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[300px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 justify-center relative  sm:w-auto mb-6">
                        <img
                          src={juice}
                          alt="sitting area"
                          className="object-cover object-center w-[313px] h-[416px]"
                        />
                      </div>
                      <div className="text-center font-nunitoSans">
                        <h1 className="mb-2 text-base font-semibold">
                          Ginger Grapefruit
                        </h1>
                        <p className="text-sm font-normal">$4.00 USD</p>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>

      <div className="text-center mb-16">
        <button className="btn bg-white text-black border border-black py-4 px-[74px]">
          View All
        </button>
      </div>
    </>
  );
};

export default CardCarousel;
