import React from "react";
import { Link } from "react-router-dom";
import Cardbtn from "../Ui/CardBtn/Cardbtn";

const PopularCard = ({ popularItem }) => {
  const {
    _id,
    fname,
    fimage,
    category,
    price,
    origin,
    stock,
    addBy,
    description,
    count,
  } = popularItem || {};

  return (
    <>
      <div className="flex px-3 py-3 w-full mt-5">
        <div className="w-full rounded overflow-hidden shadow-lg">
          <div className="[clip-path:polygon(0_0,100%_0,100%_88%,0%_100%)]">
            <img
              className="w-full h-60 object-cover object-center"
              src={fimage}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {category}
            </span>
            <div className="font-bold text-xl mb-2">{fname}</div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Available: {stock}</p>
              <p className="text-black font-semibold">$ {price}</p>
            </div>
          </div>
          <div className="flex justify-center px-6 mb-5">
            <Link to={`/single-food/${_id}`}>
              <Cardbtn>See detail</Cardbtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
