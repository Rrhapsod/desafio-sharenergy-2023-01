import styled from "styled-components";
import backImg from "../../assets/energy.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  padding: 0 13.4rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 1.4rem;
    color: #cac4cf;
    text-align: left;
  }

  > h2 {
    margin: 4.8rem 0 3rem;

    font-size: 2.4rem;
    font-weight: 500;
    text-align: left;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > section {
    margin: 0 auto 3rem;
    display: flex;
    gap: 1rem;

    input {
      width: 2rem;
      height: 2rem;
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backImg}) no-repeat center center;
  background-size: cover;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
