import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-blue-20 text-white  p-4 rounded-full m-4 truncate">
      {title}
    </button>
  );
};

export default Button;
