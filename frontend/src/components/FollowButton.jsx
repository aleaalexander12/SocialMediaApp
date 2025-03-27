import React, { useState } from "react";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`px-4 py-1 rounded-full font-medium transition ${
        isFollowing ? "bg-gray-300 text-gray-800" : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;