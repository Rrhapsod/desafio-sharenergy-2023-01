import { Container, Page } from "./styles";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function ClientsList() {
  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <h1>Uma lista de clientes aparecerá</h1>
      </Page>
    </Container>
  );
}
