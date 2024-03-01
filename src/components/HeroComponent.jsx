import React from "react";
import { Link } from "react-router-dom";

function HeroComponent() {
  return (
    <div className="hero">
      <div className="flex justify-center items-center h-full">
        <div className="mx-auto w-4/5 lg:w-2/3">
          <h1 className="text-3xl lg:text-5xl text-white text-center font-bold mb-10">
            Your #1 stop shop for all orgainic fertilizers
          </h1>
          <div className="flex justify-center">
            <Link
              to={"/products"}
              className="bg-orange-600 py-3 px-5 rounded-md shadow-md text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
