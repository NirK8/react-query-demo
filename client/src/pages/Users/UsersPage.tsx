import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import React, { MouseEventHandler } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import * as api from "../../api";
import { User } from "../../types";
import {
  Container,
  Detail,
  DetailsContainer,
  Loading,
  NoResults,
  Title,
  TrashIcon,
} from "./styles";
import _ from "lodash";

const UsersPage: React.FC = () => {
  const path = useLocation().pathname.substring(1);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
      onSuccess: async (deletedUser: User) => {
        // OPTION 1: nothing

        // OPTION 2a: refetchQueries
        // queryClient.refetchQueries(["getUsers"]);

        // OPTION 2b: invalidateQueries
        // queryClient.invalidateQueries(["getUsers"]);

        // OPTION 3 (best): setQueryData
        queryClient.setQueryData<User[]>(["getUsers"], (oldData) => {
          if (oldData) {
            return _.filter(oldData, (user) => user._id !== deletedUser._id);
          }
        });
        const deletedSuccessfully = await Swal.fire({
          titleText: "User has been deleted successfully",
          confirmButtonText: "Proceed to home page",
        });
        if (deletedSuccessfully.isConfirmed) {
          navigate("/");
        }
      },
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
        <Detail>Email: {user.email}</Detail>
        <Detail>Age: {user.age}</Detail>
        <Detail>Phone: {user.phone}</Detail>
        <Detail>Address: {user.address}</Detail>
      </DetailsContainer>
    </Container>
  );
};

export default UsersPage;
