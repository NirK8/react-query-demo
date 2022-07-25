import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";

import * as api from "../../api";
import { Container, Detail, DetailsContainer, Title } from "./styles";

const UsersPage: React.FC = () => {
  const path = useLocation().pathname.substring(1);

  const { data: user, isLoading } = useQuery(
    ["getUser"],
    () => api.getUser(path),
    {
      enabled: Boolean(path),
    }
  );
  console.log(user);

  if (isLoading) return <h1>Loading...</h1>;
  if (!user) return <h1>No Results</h1>;
  return (
    <Container>
      <Title firstName={user.firstName} lastName={user.lastName} />
      <DetailsContainer>
        <Detail>Age: {user.age}</Detail>
        <Detail>Role: {user.role}</Detail>
        <Detail>Unit: {user.unit}</Detail>
        <Detail>Tribe: {user.tribe}</Detail>
      </DetailsContainer>
    </Container>
  );
};

export default UsersPage;
