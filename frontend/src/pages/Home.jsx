import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import API from "../api/axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/post");
        setPosts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 pt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore <span className="text-purple-600">Creatify</span> Feed
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts available.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
