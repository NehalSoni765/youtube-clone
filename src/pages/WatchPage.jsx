import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/configSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  if (!id) navigate("/");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="col-span-11 p-3 container justify-center">
      <div>
        <iframe
          width="75%"
          className="h-screen object-cover "
          src={`https://www.youtube.com/embed/awddneKbFIk?si=${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
