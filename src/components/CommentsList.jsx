import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentsData }) => {
  if (!commentsData?.length) return null;

  return (
    <div className="space-y-2">
      {commentsData?.map((comment) => (
        <div key={comment.id}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList commentsData={comment?.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
