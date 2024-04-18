import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <BiLoaderCircle className="mx-auto h-10 w-10 animate-spin text-white" />
    </div>
  );
};

export default Loading;
