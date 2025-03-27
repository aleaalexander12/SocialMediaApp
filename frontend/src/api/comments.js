import API from "./axios";

const commentsAPI = {
  addComment: (postId, data) => API.post(`/comment/${postId}`, data),
  deleteComment: (commentId) => API.delete(`/comment/${commentId}`),
  updateComment: (commentId, data) => API.put(`/comment/${commentId}`, data),
};

export default commentsAPI;
