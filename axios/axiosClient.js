import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosClient = axios.create({
  baseURL: process.env.JSON_PLACEHOLDER_BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: "Bearer token here",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer tokenabcd";
  console.log(
    `Request sent to ${config.url} at ${new Date().toLocaleString()}`,
  );
  return config;
});

axiosClient.interceptors.response.use((response) => {
  console.log(
    "Response received :",
    JSON.stringify(response.data) + "at " + new Date().toLocaleString(),
  );
  return response;
});

export default axiosClient;
