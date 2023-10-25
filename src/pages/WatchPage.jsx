import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/configSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

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
    <>
      <div className="col-span-6 p-3 container justify-center">
        <iframe
          width="100%"
          className="h-screen object-cover "
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="col-span-6">
        <LiveChat videoId={id} />
      </div>
    </>
  );
};

export default WatchPage;
