import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={post.userAvatar}
          alt="user avatar"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <h4 className="font-medium text-gray-800">{post.username}</h4>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-80 object-cover"
        />
      </div>
      <p className="mt-3 text-gray-700">{post.caption}</p>
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>❤️ {post.likes} likes</span>
        <span className="hover:underline cursor-pointer">💬 {post.comments} comments</span>
      </div>
    </div>
  );
};

export default PostCard;
