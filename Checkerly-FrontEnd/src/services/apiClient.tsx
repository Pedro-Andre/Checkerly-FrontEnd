import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/auth/register/event",
});

export default api;
