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

type GetUsersFnArgs = {
  slow?: boolean;
};

export const getUsers = async ({ slow = false }: GetUsersFnArgs = {}): Promise<
  User[]
> => {
  if (slow) {
    return getUsersSlowly();
  }
  return fetchUsers();
};

const getUsersSlowly = async (): Promise<User[]> => {
  return new Promise((resolve, _reject) => {
    setTimeout(async () => {
      resolve(fetchUsers());
    }, 2000);
  });
};

const fetchUsers = async () =>
  ((await axios.get("/users")) as User[]).filter((user) => user.status);

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
