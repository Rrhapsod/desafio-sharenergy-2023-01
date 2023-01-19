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
  margin: 4rem auto;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
