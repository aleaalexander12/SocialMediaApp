import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173/api", // or your deployed URL
});

export default API;
