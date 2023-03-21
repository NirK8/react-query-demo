import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Card, Container, CardsContainer, Pokeball, NameCard } from "./styles";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery<User[]>(["getUsers"], () =>
    api.getUsers({ slow: true })
  );
  const navigate = useNavigate();

  const onCardClicked = (userId: string) => {
    navigate(`user?userId=${userId}`);
  };

  if (isError)
    return (
      <Container>
        <h1>An error has occured</h1>
      </Container>
    );
  if (isLoading)
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  if (!data)
    return (
      <Container>
        <h1>No Results</h1>
      </Container>
    );
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
