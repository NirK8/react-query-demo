import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { MouseEventHandler } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import * as api from "../../api";
import {
  Container,
  Detail,
  DetailsContainer,
  Loading,
  NoResults,
  Title,
  TrashIcon,
} from "./styles";

const UsersPage: React.FC = () => {
  const path = useLocation().pathname.substring(1);
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery(
    ["getUser"],
    () => api.getUser(path),
    {
      enabled: Boolean(path),
    }
  );
  const { mutateAsync: deleteUser } = useMutation(
    (userId: string) => api.deleteUser(userId),
    {
      onSuccess: () => queryClient.invalidateQueries(["getUsers"]),
    }
  );

  const onTrashClicked: MouseEventHandler<HTMLButtonElement> = async () => {
    const result = await Swal.fire({
      titleText: "Delete User",
      text: `User ${user?.firstName} ${user?.lastName} will be deleted`,
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      await deleteUser(path);
    }
  };

  if (isLoading) return <Loading />;
  if (!user) return <NoResults />;
  return (
    <Container>
      <TrashIcon onClick={onTrashClicked} />
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
