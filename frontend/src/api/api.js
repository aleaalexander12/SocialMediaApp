import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173//api",
});

// Add token to requests if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
