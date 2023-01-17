import { Container, Page } from "./styles";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function HTTPCat() {
  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <h1>Gatos engraçados aparecerão</h1>
      </Page>
    </Container>
  );
}
