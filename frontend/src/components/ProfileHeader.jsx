import React from "react";
import FollowButton from "./FollowButton";

const ProfileHeader = ({ user }) => {
  return (
    <div className="flex items-center gap-6 mb-8">
      <img
        src={user.avatar}
        alt="Avatar"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{user.username}</h2>
        <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
        <div className="mt-2">
          <FollowButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;