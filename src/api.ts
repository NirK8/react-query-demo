import axios from "axios";

import { POKEMON_URL } from "./consts";
import { Pokemon } from "./types";
axios.defaults.baseURL = POKEMON_URL;
axios.interceptors.response.use((res) => res.data);

export const getPokemons = (
  limit = 100,
  offset = 0
): Promise<{ results: Pokemon[] }> =>
  axios.get("pokemon", {
    params: {
      limit: limit,
      offset: offset,
    },
  });
