import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  console.log("rendering");
  
  return (
    <div className="col-span-11">
      <div className="m-4 p-2 border w-96 h-96 border-black">
        <input
          text=""
          value={text}
          className="p-2 m-2 border border-gray-500"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Demo;
