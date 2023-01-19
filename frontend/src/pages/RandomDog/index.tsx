import { Container, Page } from "./styles";

import { useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";

export function RandomDog() {
  const [dog, setDog] = useState("");

  async function getNewDog() {
    const response = await axios.get(`https://random.dog/woof?filter=mp4,webm`);
    setDog(`https://random.dog/${response.data}`);
  }

  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <Button title="Quero um novo cachorro!" onClick={getNewDog} />
        <img src={dog} alt="Um belo cachorro" />
      </Page>
    </Container>
  );
}
