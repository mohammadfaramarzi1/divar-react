import api from "configs/api";
import { getCookie } from "src/utils/cookie";

const token = getCookie("accessToken");
console.log("token", token);

const getProfile = () =>
  api.get("user/whoami");

export { getProfile };
