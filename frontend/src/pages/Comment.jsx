import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import CommentBox from "../components/CommentBox";



const Comments = () => {
  const { postId } = useParams(); // Grab post ID from route
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`/post/${postId}`);
        setPost(res.data.post);
        setComments(res.data.comments); // Adjust if your response structure differs
      } catch (err) {
        console.error("Error fetching post/comments", err);
      }
    };
    fetchData();
  }, [postId]);

  const handleCommentSubmit = async () => {
    try {
      const res = await API.post(`/comments`, {
        postId,
        text: newComment,
      });
      setComments((prev) => [...prev, res.data]);
      setNewComment("");
    } catch (err) {
      console.error("Error posting comment", err);
    }
  };

  if (!post) return <p className="text-center py-10">Loading post...</p>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="mb-6">
        <img src={post.image} alt="Post" className="rounded-md mb-4" />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {post.caption}
        </h2>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">Comments</h3>
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentBox key={comment._id} comment={comment} />
          ))}
        </div>

        <div className="mt-4">
          <textarea
            rows="3"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
