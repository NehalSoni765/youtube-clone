import React from "react";
import ButtonList from "../components/ButtonList";
import VideoContainer from "../components/VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
