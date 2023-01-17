import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Menu() {
  return (
    <Container>
      <Link to="/user">Random User Generator</Link>
      <Link to="/cat">HTTP Cat</Link>
      <Link to="/dog">Random Dog</Link>
      <Link to="/clients">Clients List</Link>
    </Container>
  );
}
