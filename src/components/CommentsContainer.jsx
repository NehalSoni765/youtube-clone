import React from "react";
import { commentsData } from "../utils/commentData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
