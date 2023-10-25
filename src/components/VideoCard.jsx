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

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
