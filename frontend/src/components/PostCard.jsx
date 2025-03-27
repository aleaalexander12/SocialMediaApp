import React, { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import CommentBox from "./CommentBox";

const PostCard = ({ post }) => {
  const { userAvatar, username, image, caption, likes: initialLikes, comments } = post;

  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white shadow rounded-xl mb-6 overflow-hidden">
      <div className="flex items-center px-4 py-3">
        <img src={userAvatar} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-gray-700">{username}</span>
      </div>
      <img src={image} alt="post" className="w-full max-h-[600px] object-cover" />

      <div className="px-4 py-3">
        <div className="flex items-center space-x-4 mb-2">
          <button onClick={toggleLike} className="transition-transform hover:scale-110">
            <Heart
              className={`w-6 h-6 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>
          <button onClick={() => setShowComments((prev) => !prev)} className="hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-2">
          <span className="font-bold">{username}</span> {caption}
        </p>
        <p className="text-sm text-gray-500">{likes} likes</p>

        {showComments && (
          <div className="mt-4">
            <CommentBox comments={comments} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
