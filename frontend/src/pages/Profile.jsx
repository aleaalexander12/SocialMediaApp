import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); // username or userId
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Mock data for now – replace with real backend fetch
  useEffect(() => {
    setUser({
      id: 1,
      username: "creativequeen",
      bio: "Passionate designer & artist 🎨✨",
      avatar: "https://i.pravatar.cc/150?img=1",
    });

    setPosts([
      { id: 1, image: "https://source.unsplash.com/random/400x400?art" },
      { id: 2, image: "https://source.unsplash.com/random/400x400?fashion" },
      { id: 3, image: "https://source.unsplash.com/random/400x400?design" },
    ]);
  }, [id]);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-6 mb-10">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.username}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Posts by {user.username}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt="Post"
            className="w-full h-60 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
