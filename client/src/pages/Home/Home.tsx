import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Card, CardsContainer, Pokeball, NameCard } from "./styles";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { data, isLoading } = useQuery(["getUsers"], () => api.getUsers());
  const navigate = useNavigate();

  const onCardClicked = (link: string) => {
    navigate(`/${link}`);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (!data) return <h1>No Results</h1>;
  return (
    <CardsContainer>
      {data.map((user, index) => (
        <Card
          key={user.firstName + index}
          onClick={() => onCardClicked(user._id)}
        >
          <Pokeball />
          <NameCard>
            {user.firstName} {user.lastName}
          </NameCard>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default Home;
