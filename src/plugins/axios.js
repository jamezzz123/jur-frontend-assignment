import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.122.252.114:3000",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export default instance;
