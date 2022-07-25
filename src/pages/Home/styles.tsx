import styled from "styled-components";

import pokeball from "../../assets/pokeball.png";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  align-self: start;
  background-color: #adadeb;
  padding: 8px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 64px);
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  min-width: 160px;
  width: 400px;
  min-height: 40px;
  margin: 16px 0;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: hsl(240, 100%, 93.72549019607843%);
  cursor: pointer;
  :hover {
    background-color: hsl(240, 100%, 95%);
  }
`;

export const Pokeball = styled.img.attrs({ src: pokeball })`
  width: 64px;
  height: 64;
  max-width: 64px;
`;

export const NameCard = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
