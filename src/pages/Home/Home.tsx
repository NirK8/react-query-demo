import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";

import { Card, CardsContainer, Pokeball, PokemonName } from "./styles";
import * as api from "../../api";

const Home: React.FC = () => {
  const { data, isLoading } = useQuery(["getPokemons"], () =>
    api.getPokemons()
  );

  const pokemons = useMemo(() => data?.results, [data]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!pokemons) return <h1>No Results</h1>;

  return (
    <CardsContainer>
      {pokemons.map((pokemon, index) => {
        return (
          <Card key={pokemon.name + index}>
            <Pokeball />
            <PokemonName>{pokemon.name}</PokemonName>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default Home;
