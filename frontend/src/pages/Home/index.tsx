import { useEffect, useState } from "react";
import { FiDollarSign, FiUser } from "react-icons/fi";

import { Container, Menu, Page } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      <Menu>
        <a>Random User Generator</a>
        <a>HTTP Cat</a>
        <a>Random Dog</a>
        <a>Clients List</a>
      </Menu>
      <Page>
        
      </Page>
    </Container>
  );
}
