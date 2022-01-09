import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import FoodItem from "./FoodItem";
import Skeleton from "./Skeleton";

const Foods = () => {
  const [menuTab, setMenuTab] = useState("OceanPackage");
  const [loading, setLoading] = useState(false);
  const [foods] = useFetch();

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //food menu tab
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        <h2 className="font-bold text-5xl text-gray-700 my-24">
          Our Best Selling Headphones
        </h2>
      </div>
      {/* all foods  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {foods
          .filter((item) => menuTab === item.type)
          .map((item) =>
            loading ? (
              <Skeleton key={item.id} />
            ) : (
              <FoodItem key={item.id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Foods;
