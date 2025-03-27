import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    caption: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd send to backend, or Firebase, etc.
    console.log("New Post Submitted:", formData);
    navigate("/"); // go back to home/feed
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Create a New Post 🖼️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Caption</label>
            <textarea
              name="caption"
              placeholder="Write something inspiring..."
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-medium"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
