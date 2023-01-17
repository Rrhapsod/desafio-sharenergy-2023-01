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
  margin: 4rem 8rem;
`;

export const Search = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 1rem;
  max-width: 60rem;
`;

export const Pagination = styled.div`
  margin: 2rem auto;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const UserList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
