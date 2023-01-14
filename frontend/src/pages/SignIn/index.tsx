import { FiUser, FiLock } from "react-icons/fi";
import { useState } from "react";

import { Background, Container, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { signIn } = useAuth();

  const rememberMe = () => {
    setRemember(!remember);
  };

  function handleSignIn() {
    signIn({ username, password, remember });
  }

  return (
    <Container>
      <Form>
        <h1>Desafio | SHARENERGY</h1>
        <p>Aplicação que se comunica com APIs distintas e um CRUD básico</p>
        <h2>Faça seu login</h2>
        <Input
          icon={FiUser}
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <section>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="Lembrar?"
            checked={remember}
            onChange={rememberMe}
          />
          Lembrar?
        </section>
        <Button title="Entrar" onClick={handleSignIn} />
      </Form>
      <Background />
    </Container>
  );
}
