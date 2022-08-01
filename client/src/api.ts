import axios from "axios";

import { BASE_URL } from "./consts";
import { User } from "./types";
axios.defaults.baseURL = BASE_URL;
axios.interceptors.response.use((res) => res.data);

type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      resolve(
        ((await axios.get("/users")) as User[]).filter((user) => user.status)
      );
    }, 1500);
  });
};

// export const getUsers = async (): Promise<User[]> =>
//   ((await axios.get("/users")) as User[]).filter((user) => user.status);

export const getUser = (userId: string): Promise<User> =>
  axios.get(`/users/${userId}`);

export const deleteUser = (userId: string) =>
  axios.put(`/users/${userId}`, {
    status: 0,
  });
export const createUser = (userDto: UserDto) =>
  axios.post(`/users}`, {
    status: 1,
    ...userDto,
  });
