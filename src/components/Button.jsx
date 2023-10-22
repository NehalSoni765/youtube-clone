import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1 px-3 m-2 rounded-md bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;
