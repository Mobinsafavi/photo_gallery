import axios from "axios";

const instance = axios.create();

const authConfigUsername = localStorage.getItem("username");
const authConfigPassword = localStorage.getItem("password");

instance.interceptors.request.use((config) => {
  config.baseURL = "http://137.74.230.245:8000";
  config.auth = {
    username: authConfigUsername,
    password: authConfigPassword,
  };
  return config;
});

instance.interceptors.response.use((res) => res?.data);

export default instance;
