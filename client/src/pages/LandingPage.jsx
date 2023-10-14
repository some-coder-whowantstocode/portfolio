import React, { useState } from "react";
import Canvas from "../canvas/Canvas";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingPage = (props) => {
  return (
    <>
      <div className="relative">
        <Canvas />
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center justify-center flex-col">
          <h1 className=" text-5xl font-bold flex ">
            <span className=" block animate-seff hover:animate-teff">H</span>
            <span className=" block animate-seff hover:animate-teff mr-3">i </span>
            
            <span className=" block animate-seff hover:animate-teff">,</span>
            <span className=" block animate-seff hover:animate-teff ml-3 mr-3 ">i</span>
            <span className=" block animate-seff hover:animate-teff">a</span>
            <span className=" block animate-seff hover:animate-teff mr-3">m</span>
            <span className=" block animate-seff hover:animate-teff">r</span>
            <span className=" block animate-seff hover:animate-teff">o</span>
            <span className=" block animate-seff hover:animate-teff">h</span>
            <span className=" block animate-seff hover:animate-teff">i</span>
            <span className=" block animate-seff hover:animate-teff">t</span>
          </h1>
          <button
            className={`mt-4 text-2xl  border-2 border-gray-500  py-2 px-4 hover:bg-blue-500 text-white duration-500 transition-all ease-in-out flex items-center hover:border-blue-500 justify-center group`}
          >
            <p className="first:text-white">check out </p>
            <AiOutlineArrowRight
              className={` group-hover:rotate-90 transition-all duration-300 ml-2`}
              size={20}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
