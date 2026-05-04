import React from "react";

const Title = ({children}) => {
  return (
    <>
      <p className="font-bold text-5xl text-center">
        <span className="text-yellow-500 mx-1 mb-1 font-extrabold text-5xl relative inline-block stroke-current">
            {children}
          <svg
            className="absolute -bottom-1.5 w-full max-h-2 "
            viewBox="0 0 70 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth="2"
            ></path>
          </svg>
        </span>
      </p>
    </>
  );
};

export default Title;
