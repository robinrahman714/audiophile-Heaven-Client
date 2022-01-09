import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
import AllHeadphones from "../AllHeadphones/AllHeadphones";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Flip left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
            Audiophile Heaven
          </h1>
          <p className="font-primary text-white text-center text-sm w-96 select-none">
            Hey there! Welcome to Audiophile Heaven, The largest professional
            and enthusiast audio gear shop in Bangladesh
          </p>
          <Link to="/allheadphones">
            <button className="btn-primary w-36 mt-5">Explore More</button>
          </Link>
        </div>
      </Flip>
    </section>
  );
};

export default HeroBanner;
