import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVideos = async () => {
    setIsLoading(true);
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    if (response?.items) {
      setVideos(response?.items);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    !videos.length && getVideos();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link key={video?.id} to={`/watch?v=${video?.id}`}>
            <VideoCard info={video} />
            {/* <AdVideoCard info={video} />  // HOC */}
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
