import axios from "axios";

const api = axios.create({
  baseURL: "/api",  // Use the /api path which will be proxied to the backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
