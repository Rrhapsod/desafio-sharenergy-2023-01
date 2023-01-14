import { Container, Profile, Name, SignOut } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Profile>
        <div>
          <Name>Olá, {user?.username}</Name>
          <SignOut onClick={signOut}>sair</SignOut>
        </div>
      </Profile>
      <h3>Home</h3>
      <h2>Desafio | Sharenergy</h2>
    </Container>
  );
}
