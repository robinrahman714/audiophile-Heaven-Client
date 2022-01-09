import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLink = [
    { id: 1, text: "Sennheiser" },
    { id: 2, text: "Audeze" },
    { id: 3, text: "Hifiman" },
    { id: 4, text: "Campfire Audio" },
    { id: 5, text: "Saturday to Thursday Open" },
    { id: 6, text: "Online Payments" },
    { id: 7, text: "Official Warranty" },
    { id: 8, text: "Official Distributor" },
    { id: 9, text: "+8801771535132547" },
  ];
  return (
    <Fade left>
      <footer className="text-gray-600 poppins bg-gray-100">
        <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            {/* brand  */}
            <div className="flex items-center flex-grow">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="../../../assets/logo.png"
                  alt="logo"
                  className="w-12 h-12"
                />
                <h1
                  className={`text-3xl font-semibold text-gray-800 select-none`}
                >
                  Audiophile Heaven
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Our Brands
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(0, 4).map((item) => (
                  <a
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Services
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(4, 8).map((item) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm "
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Contact
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(8, 12).map((item) => (
                  <a
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-green-500">
          <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2021 Copyright by - Audiophile Heaven
              <a rel="noopener noreferrer" className="text-white ml-1"></a>
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
