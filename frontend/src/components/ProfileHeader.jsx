import React from "react";

const ProfileHeader = ({ user }) => {
  return (
    <div className="flex items-center gap-6">
      <img
        src={user.avatar}
        alt="avatar"
        className="w-20 h-20 rounded-full object-cover border"
      />
      <div>
        <h2 className="text-xl font-bold">{user.username}</h2>
        <p className="text-gray-600">{user.bio}</p>
        <div className="flex gap-4 mt-2 text-sm text-gray-700">
          <span>{user.followers} Followers</span>
          <span>{user.following} Following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
