import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  // headers: {
  //   "Content-Type": `application/json`,
  // },
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("access_token")}`;
