import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import React, { MouseEventHandler } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") as string;

  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: user, isLoading } = useQuery(
    ["getUser", userId],
    () => api.getUser(userId),
    {
      enabled: Boolean(userId),
    }
  );
  const { mutateAsync: deleteUser } = useMutation(
    (userId: string) => api.deleteUser(userId),
    {
      onSuccess: async (deletedUser: User) => {
        // OPTION 1: nothing
        const deletedSuccessfully = await Swal.fire({
          titleText: "User has been deleted successfully",
          confirmButtonText: "Proceed to home page",
        });
        if (deletedSuccessfully.isConfirmed) {
          navigate("/");
        }

        // OPTION 2b: invalidateQueries
        // This option will set the query status to "stale"
        // queryClient.invalidateQueries(["getUsers"]);

        // OPTION 2a: refetchQueries
        // queryClient.refetchQueries(["getUsers"]);

        // OPTION 3: setQueryData
        // queryClient.setQueryData<User[]>(["getUsers"], (oldData) => {
        //   if (oldData) {
        //     return _.filter(oldData, (user) => user._id !== deletedUser._id);
        //   }
        // });
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
      await deleteUser(userId);
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
