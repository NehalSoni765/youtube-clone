import React from "react";

const ChatMessage = ({ name, message, thumbnailSrc }) => {
  return (
    <>
      <div className="flex items-center shadow-md p-3">
        <img
          alt="user-logo"
          className="rounded-2xl"
          src={
            thumbnailSrc ||
            "https://yt4.ggpht.com/wlHtZh08kXHq1Bu3EQXcHP5gScZwgVlra0xT3wtOufqBz_iVPUz4xeyQvy1kDZmDiTeijyoLXw=s32-c-k-c0x00ffffff-no-rj"
          }
        />
        <div className="flex pl-4">
          <p className="font-bold pr-2">{name}</p>
          <p className="">{message}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
