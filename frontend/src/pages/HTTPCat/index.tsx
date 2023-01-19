import { Container, Page } from "./styles";

import { FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Input } from "../../components/Input";

export function HTTPCat() {
  const [errorCode, setErrorCode] = useState(0);
  const [cat, setCat] = useState("");

  async function getCatImage() {
    if (errorCode != 0) {
      setCat(`https://http.cat/${errorCode}.jpg`);
    } else {
      setCat(`https://http.cat/404.jpg`);
    }
  }

  useEffect(() => {
    getCatImage();
  }, [errorCode]);

  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <Input
          icon={FiGithub}
          placeholder="Digite seu código de erro e veja um gato engraçado"
          type="text"
          onChange={(e) => setErrorCode(Number(e.target.value))}
        />
        <img src={cat} alt="Imagem do gato" />
      </Page>
    </Container>
  );
}
