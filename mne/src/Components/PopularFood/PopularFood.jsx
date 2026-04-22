import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../Ui/Title";
import axios from "axios";
import PopularCard from "./PopularCard";
import Container from "../Ui/Container";

const PopularFood = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://seasons-server.vercel.app/api/v1/all-foods?sortField=count&sortOrder=desc"
      )
      .then((res) => setPopularItems(res.data));
  }, []);
  return (
    <>
      <Container>
      <p className="font-bold text-4xl text-center mt-10 mb-5">
     Our
    <span className="text-yellow-500 mx-1 font-extrabold text-5xl relative inline-block stroke-current">
        Popular
        <svg className="absolute -bottom-3.5 w-full max-h-2.5" viewBox="0 0 65 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
        </svg>
    </span>
    food
</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative">

          {popularItems.slice(0,6)?.map((popularItem) => (
            <PopularCard
              key={popularItem._id}
              popularItem={popularItem}
            ></PopularCard>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to={"/all-food"}>
            <button className="w-[150px] animate-bounce bg-red-600 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-yellow-500 before:to-red-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              See More
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};
// bg-gradient-to-r from-red-500 to-yellow-600
export default PopularFood;
