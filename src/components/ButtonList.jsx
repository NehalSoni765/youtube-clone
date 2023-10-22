import React from "react";
import Button from "./Button";
import { BUTTON_OF_LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex p-2 ">
      {BUTTON_OF_LIST.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
