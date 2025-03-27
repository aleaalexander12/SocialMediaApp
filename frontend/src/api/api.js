import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // make sure this matches your Express server URL
  withCredentials: true, // optional: only needed if you're dealing with cookies
});

export default API;