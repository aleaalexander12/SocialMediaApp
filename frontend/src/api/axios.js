import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // ✅ points to backend
});

export default API;
