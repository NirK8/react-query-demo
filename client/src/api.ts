import axios from "axios";

import { BASE_URL } from "./consts";
import { User } from "./types";
axios.defaults.baseURL = BASE_URL;
// axios.interceptors.response.use((res) => res.data);

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
  ((await axios.get("/users")).data as User[]).filter((user) => user.status);

export const getUser = async (userId: string): Promise<User> =>
  (await axios.get(`/users/${userId}`)).data;

export const deleteUser = async (userId: string) =>
  (
    await axios.put(`/users/${userId}`, {
      status: 0,
    })
  ).data;
export const createUser = (userDto: UserDto) =>
  axios.post(`/users}`, {
    status: 1,
    ...userDto,
  });
