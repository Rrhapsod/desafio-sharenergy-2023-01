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

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0 auto;
  max-width: 100rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Register = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Details = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > section {
    display: flex;
    gap: 1rem;
  }
`;

export const Clients = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: fit-content;

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > a:hover {
    color: red;
  }
`;
