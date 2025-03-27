import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import PostCard from "../components/PostCard";

const dummyUser = {
  avatar: "https://i.pravatar.cc/100?img=5",
  username: "creativequeen",
  bio: "I make art to make the world softer. 💜",
  followers: 1200,
  following: 340,
};

const dummyPost = {
  _id: "1",
  userAvatar: dummyUser.avatar,
  username: dummyUser.username,
  image: "https://source.unsplash.com/random/500x500?art",
  caption: "A beautiful day to create 🎨",
  likes: 123,
  comments: 10,
};

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 hidden md:block border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ProfileHeader user={dummyUser} />

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <PostCard post={dummyPost} />
          <PostCard post={dummyPost} />
          <PostCard post={dummyPost} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
