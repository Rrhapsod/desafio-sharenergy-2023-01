import { Container, Page } from "./styles";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function RandomDog() {
  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <h1>Cachorros aleatórios serão gerados</h1>
      </Page>
    </Container>
  );
}
