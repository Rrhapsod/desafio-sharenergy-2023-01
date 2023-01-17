import { Container, Page } from "./styles";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function Home() {
  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <h1>Selecione seu serviço</h1>
      </Page>
    </Container>
  );
}
