import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pencil, Trash2, Send } from "lucide-react";
import commentsAPI from "../api/comments";


const CommentBox = ({ postId, comments, setComments }) => {
  const { user } = useSelector((state) => state.auth);
  const [newComment, setNewComment] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await addComment(postId, { text: newComment });
      setComments((prev) => [...prev, res.data]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const handleEdit = async (commentId) => {
    try {
      const res = await updateComment(commentId, { text: editText });
      setComments((prev) =>
        prev.map((c) => (c._id === commentId ? res.data : c))
      );
      setEditing(null);
      setEditText("");
    } catch (err) {
      console.error("Error updating:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">Comments</h4>

      {comments.map((c) => (
        <div
          key={c._id}
          className="flex justify-between items-start mb-3 border-b pb-2"
        >
          <div className="flex-1">
            <p className="text-sm font-medium text-purple-600">{c.user?.username}</p>
            {editing === c._id ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="text-sm text-purple-600"
                  onClick={() => handleEdit(c._id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-700 mt-1">{c.text}</p>
            )}
          </div>
          {user && user._id === c.user?._id && (
            <div className="flex gap-2 items-center">
              <button
                className="text-gray-400 hover:text-purple-600"
                onClick={() => {
                  setEditing(c._id);
                  setEditText(c.text);
                }}
              >
                <Pencil size={16} />
              </button>
              <button
                className="text-gray-400 hover:text-red-500"
                onClick={() => handleDelete(c._id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add new comment */}
      <div className="mt-4 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border px-3 py-2 rounded-md text-sm"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
