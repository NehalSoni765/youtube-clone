import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = ({ videoId }) => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.chat);

  const object = {
    name: generateRandomName(),
    message: makeRandomMessage(),
    thumbnailSrc: "",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage(object));
    }, 10000);
    return () => clearInterval(timer);
  });

  if (!messages.length) return null;

  return (
    <div className="m-3 border border-black  rounded-lg ">
      <div className="overflow-y-scroll flex flex-col-reverse h-[400px]">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            name={msg.name}
            message={msg.message}
            thumbnailSrc={msg.thumbnailSrc}
          />
        ))}
      </div>
      <form
        className="flex m-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Nehal Soni",
              message: liveMessage,
              thumbnailSrc: "",
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          className=" w-9/12 p-2 border border-black rounded-md"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border-gray-200 border p-2 ml-2 rounded-md bg-green-200">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
