import React from "react";

const CommentBox = ({ comments }) => {
  return (
    <div className="mt-4">
      <h4 className="font-medium text-gray-800 mb-2">Comments</h4>
      <div className="space-y-2">
        {comments.map((comment, index) => (
          <div key={index} className="text-sm text-gray-700">
            <span className="font-semibold mr-2">{comment.username}:</span>
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;