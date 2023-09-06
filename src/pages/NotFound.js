import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl">Page not found!</h1>
      <Link to="/">
        <button className="bg-red-500 font-bold text-white p-2 m-3 rounded-lg">
          Go to Homapage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
