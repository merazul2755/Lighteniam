import React from "react";
import "tw-elements";
import banner1 from "../../images/BottledJuices_Lead.jpg";
import banner2 from "../../images/juice.jpg";
import CardCarousel from "../Home/CardCarousel";
import { Gallery } from "./Gallery";

export const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative max-w-[1440px] m-auto mb-0 md:mb-[60px]"
        data-bs-ride="carousel"
      >
        <div className="absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full bg-black">
            <img
              src={banner1}
              className="block w-full md:h-[720px] sm:h-4/5 h-2/4 opacity-70"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute left-[70px] bottom-16">
              <p className="font-nunitoSans font-bold text-base mb-2">
                ORGINAL SMOOTHIES
              </p>
              <h5 className="text-[57px] font-muli font-bold leading-normal mb-4">
                Make the Most of Morning{" "}
              </h5>
              <p className="font-nunitoSans font-semibold text-lg mb-6">
                The quickest, easiest way to get in your fruits and veggies
              </p>
              <button className="bg-white h-12 w-52 text-black font-nunitoSans font-semibold text-sm">
                Learn More
              </button>
              <button className="bg-black h-12 w-52 text-white font-nunitoSans font-semibold text-sm ml-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src={banner2}
              className="block w-full md:h-[720px] sm:h-4/5 h-2/4"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute left-[70px] bottom-16">
              <p className="font-nunitoSans font-bold text-base mb-2">
                ORGINAL SMOOTHIES
              </p>
              <h5 className="text-[57px] font-muli font-bold leading-normal mb-4">
                Make the Most of Morning{" "}
              </h5>
              <p className="font-nunitoSans font-semibold text-lg mb-6">
                The quickest, easiest way to get in your fruits and veggies
              </p>
              <button className="bg-white h-12 w-52 text-black font-nunitoSans font-semibold text-sm">
                Learn More
              </button>
              <button className="bg-black h-12 w-52 text-white font-nunitoSans font-semibold text-sm ml-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src={banner2}
              className="block w-full md:h-[720px] sm:h-4/5 h-2/4"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute left-[70px] bottom-16">
              <p className="font-nunitoSans font-bold text-base mb-2">
                ORGINAL SMOOTHIES
              </p>
              <h5 className="text-[57px] font-muli font-bold leading-normal mb-4">
                Make the Most of Morning{" "}
              </h5>
              <p className="font-nunitoSans font-semibold text-lg mb-6">
                The quickest, easiest way to get in your fruits and veggies
              </p>
              <button className="bg-white h-12 w-52 text-black font-nunitoSans font-semibold text-sm">
                Learn More
              </button>
              <button className="bg-black h-12 w-52 text-white font-nunitoSans font-semibold text-sm ml-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute -top-[104px] bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline -left-2"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span className=" inline-block bg-no-repeat" aria-hidden="true">
            <svg
              width="32"
              height="25"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29425e-05 12.9914V12.7902C0.00320053 12.7515 0.0211697 12.7155 0.0502186 12.6897L0.050375 12.6896C0.050375 12.6392 0.100687 12.6392 0.100687 12.5889C0.100687 12.5386 0.150999 12.5386 0.150999 12.4883C0.178812 12.4883 0.201313 12.4658 0.201313 12.438L11.6227 0.61409C11.812 0.433184 12.0691 0.321777 12.3522 0.321777C12.6354 0.321777 12.8925 0.433152 13.0822 0.614465L13.0818 0.614059C13.2724 0.789371 13.3914 1.04003 13.3914 1.31846C13.3914 1.5969 13.2724 1.84756 13.0824 2.02221L13.0818 2.02284L3.47169 11.9851H30.9937C31.5495 11.9851 32 12.4357 32 12.9914C32 13.5472 31.5495 13.9977 30.9937 13.9977H3.27044L13.0818 23.96C13.2516 24.1452 13.3456 24.3874 13.3452 24.6387C13.3452 24.9259 13.2248 25.185 13.0319 25.3683L13.0314 25.3687C12.8561 25.5594 12.6055 25.6784 12.327 25.6784C12.0486 25.6784 11.7979 25.5593 11.6233 25.3694L11.6227 25.3687L0.251595 13.7963C0.251595 13.746 0.251593 13.746 0.201281 13.6957C0.173468 13.6957 0.150969 13.6732 0.150969 13.6454C0.150969 13.5951 0.100657 13.5951 0.100657 13.5448H0.0503445V13.4442C0.0213261 13.4185 0.00332451 13.3827 9.34601e-05 13.3441L3.05176e-05 13.3435V12.9913L6.29425e-05 12.9914Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute -top-[104px] bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span className="inline-block bg-no-repeat" aria-hidden="true">
            <svg
              width="32"
              height="26"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.9999 12.9914V12.7902C31.9968 12.7515 31.9788 12.7155 31.9498 12.6897L31.9496 12.6896C31.9496 12.6392 31.8993 12.6392 31.8993 12.5889C31.8993 12.5386 31.849 12.5386 31.849 12.4883C31.8212 12.4883 31.7987 12.4658 31.7987 12.438L20.3773 0.61409C20.188 0.433184 19.9309 0.321777 19.6478 0.321777C19.3646 0.321777 19.1075 0.433152 18.9178 0.614465L18.9182 0.614059C18.7276 0.789371 18.6086 1.04003 18.6086 1.31846C18.6086 1.5969 18.7276 1.84756 18.9176 2.02221L18.9182 2.02284L28.5283 11.9851H1.00628C0.4505 11.9851 0 12.4357 0 12.9914C0 13.5472 0.450531 13.9977 1.00628 13.9977H28.7296L18.9182 23.96C18.7484 24.1452 18.6544 24.3874 18.6548 24.6387C18.6548 24.9259 18.7752 25.185 18.9681 25.3683L18.9686 25.3687C19.1439 25.5594 19.3945 25.6784 19.673 25.6784C19.9514 25.6784 20.2021 25.5593 20.3767 25.3694L20.3773 25.3687L31.7484 13.7963C31.7484 13.746 31.7484 13.746 31.7987 13.6957C31.8265 13.6957 31.849 13.6732 31.849 13.6454C31.849 13.5951 31.8993 13.5951 31.8993 13.5448H31.9497V13.4442C31.9787 13.4185 31.9967 13.3827 31.9999 13.3441L32 13.3435V12.9913L31.9999 12.9914Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <CardCarousel></CardCarousel>
      <Gallery></Gallery>
    </>
  );
};
