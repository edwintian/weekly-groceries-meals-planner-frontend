import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BACKEND_BASE_URL,
  withCredentials: true
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
