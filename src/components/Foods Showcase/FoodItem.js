import React from "react";
import { useHistory } from "react-router-dom";
import useBooking from "../../hooks/useBooking";

const FoodItem = ({ image, title, description, price, type, props }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/foods/${title}`);
  };

  const { handleBookings } = useBooking();
  //   const history = useHistory();
  //handing booking
  const handleBooking = () => {
    handleBookings(props);
    // history.push(`/booking/${_id}`);
  };
  return (
    <div>
      <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
        <img
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={image}
          alt=""
        />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-gray-900 poppins text-lg">{title}</h1>
          <p className="text-gray-500 poppins text-sm text-center">
            {description.slice(0, 50)}
          </p>
          <h2 className="text-gray-900 poppins text-2xl font-bold">${price}</h2>
          {/* <button
            className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
            onClick={handleRoute}
          >
            Book Now
          </button> */}
          <div className="flex items-center justify-between pt-3">
            {/* <h1 className="font-primary font-semibold text-gray-900 text-2xl">
              ${price}
            </h1> */}
            <button className="btn-primary px-6" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
