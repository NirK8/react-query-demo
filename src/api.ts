import axios from "axios";

import { BASE_URL } from "./consts";
import { User } from "./types";
axios.defaults.baseURL = BASE_URL;
axios.interceptors.response.use((res) => res.data);

export const getUsers = async (): Promise<User[]> =>
  ((await axios.get("/")) as User[]).filter((user) => user.status === 1);

export const getUser = (userId: string): Promise<User> =>
  axios.get(`/${userId}`);
