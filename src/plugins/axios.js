import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// let currentUser = useSelector((state) => state.user);

const instance = axios.create({
  baseURL: "http://34.122.252.114:3000",
  //   timeout: 1000,
  // headers: { user_id: currentUser.id },
});

export default instance;
