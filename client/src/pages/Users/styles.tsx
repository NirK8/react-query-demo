import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import { MouseEventHandler } from "react";

type TitleProps = {
  firstName: string;
  lastName: string;
  className?: string;
};
type TrashIconProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Container = styled.div`
  min-width: 700px;
  width: 70%;
  height: 70%;
  min-height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #c5c4ff;
  border-radius: 0.25rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled(
  ({ firstName, lastName, className }: TitleProps) => (
    <div className={className}>
      {firstName} {lastName}
    </div>
  )
)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  box-sizing: border-box;
  font-size: 2rem;
  font-weight: 500;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
  padding: 1rem 0;
  box-sizing: border-box;
  width: 100%;
`;

export const Detail = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  padding: 1rem 0;
  box-sizing: border-box;
  font-weight: 300;
`;

export const TrashIcon = styled(({ className, onClick }: TrashIconProps) => (
  <IconButton className={className} onClick={onClick}>
    <DeleteIcon />
  </IconButton>
))`
  &.MuiIconButton-root {
    &.MuiIcon-root {
      cursor: pointer;
      max-width: 24px;
      max-height: 24px;
    }
    z-index: 1;
    position: absolute;
    right: 1.25rem;
    top: 1rem;
    cursor: pointer;
  }
`;

export const Loading = styled.h1.attrs({ children: "Loading..." })`
  align-self: start;
`;

export const NoResults = styled.h1.attrs({ children: "No Results" })`
  align-self: start;
`;
