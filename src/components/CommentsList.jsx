import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentsData }) => {
  if (!commentsData?.length) return null;

  return (
    <div className="space-y-2">
      {commentsData.map((comment) => (
        <>
          <Comment key={comment.id} data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList commentsData={comment?.replies} />
          </div>
        </>
      ))}
    </div>
  );
};

export default CommentsList;
