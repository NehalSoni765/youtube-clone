import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-1 p-2 shadow-sm w-80">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="rounded-lg"
      />
      <h1 className="font-bold">{title}</h1>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
