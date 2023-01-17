import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 12rem auto;
  grid-template-areas:
    "header"
    "menu"
    "page";
`;

export const Page = styled.div`
  grid-area: page;
  margin: 0 12rem;
  overflow-y: auto;
  display: flex;
  gap: 2.4rem;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
