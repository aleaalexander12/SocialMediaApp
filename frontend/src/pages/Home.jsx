import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import API from "../api/axios"; // <-- Make sure this file exists

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts"); // <-- your backend endpoint
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">🔥 Trending Creators</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts found.</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default Home;
