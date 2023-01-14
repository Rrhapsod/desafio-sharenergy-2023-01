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

export const Menu = styled.div`
  grid-area: menu;
  padding: 0 6rem;
  margin-top: 4rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: auto;
  }

  > a {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    height: 5.6rem;
    min-width: 25rem;
    border: 0;

    border-radius: 10px;
    font-weight: 500;
    font-size: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    &:disabled {
      opacity: 0.5;
    }
  }
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
