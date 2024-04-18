import React from "react";

const Input = (props) => {
  return (
    <div
      className={`${
        props?.isMobileResponsive ? "mt-4" : "ml-4"
      } border-white rounded-xl bg-white  h-10 flex-1 border `}
    >
      <input
        className="inline bg-zinc-700 text-white text-left placeholder:text-white pl-4 placeholder:opacity-70  rounded-xl  w-full h-full outline-none text-1xl font-medium"
        placeholder="Search weather using city or country name ..."
        {...props}
      />
    </div>
  );
};

export default Input;
