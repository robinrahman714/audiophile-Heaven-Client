import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "Authorized Dealer and Distributer",
    },
    {
      id: 2,
      text: "Official Warranty Service",
    },
    {
      id: 3,
      text: "Refund Policy. No Question Asked!",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className=" text-gray-800 text-4xl font-semibold mb-5">
            About Us
          </h1>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
        <Fade left>
          <div className="flex justify-center lg:justify-start">
            <img src="../../../assets/about.png" alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* description  */}
            <p className="text-gray-800 text-sm font-primary">
              Our aim is to make the 'audiophile community' of Bangladesh
              experience branded gears for their ears. We aspire to bring the
              listeners and the musicians under one umbrella. We want to achieve
              this by offering accessories that are both affordable and from the
              house of top notch brands. There is already a need for such
              accessories among the musicians that would help them produce
              music, and among the music-lovers who want better sound quality
              and clarity in their listening experience. Our online store hopes
              to build a strong community of audiophiles from both the
              groups.First ever dedicated online marketplace for musicians &
              Audiophiles in Bangladesh. The one stop shop for all your musical
              needs.
            </p>

            {/* heading  */}
            <h1 className="mt-5 font-primary text-gray-800 text-2xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className=" items-center space-x-3" key={item.id}>
                  <span className="w-36 text-gray-800 text-m">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
