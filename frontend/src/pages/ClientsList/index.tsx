import { Clients, Container, Details, Page, Register, Section } from "./styles";

import { FiCreditCard, FiHome, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface clientProps {
  _id: string;
  name: string;
  email: string;
  telephone: number;
  address: string;
  cpf: number;
}

export function ClientsList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState(0);

  const [clientsList, setClientsList] = useState([]);

  const [idClient, setIdClient] = useState("");

  const [currentClient, setCurrentClient] = useState<clientProps>();

  async function getClientsList() {
    const response = await api.get("http://localhost:3000/client/");
    setClientsList(response.data.index);
  }

  async function getCurrentClient() {
    const response = await api.get(`http://localhost:3000/client/${idClient}`);
    setCurrentClient(response.data.show);
  }

  function handleSignUp() {
    if (!name || !email || !telephone || !address || !cpf) {
      return alert("Preencha todos os campos!");
    }

    try {
      api.post("http://localhost:3000/client", {
        name,
        email,
        telephone,
        address,
        cpf,
      });

      getClientsList();
      alert("Cliente cadastrado com sucesso");
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível cadastrar o cliente.");
      }
    }
  }

  function handleUpdate() {
    try {
      api.put(`http://localhost:3000/client/${idClient}`, {
        name,
        email,
        telephone,
        address,
        cpf,
      });

      getClientsList();
      alert("Cliente atualizado com sucesso");
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível atualizar o cliente.");
      }
    }
  }

  function handleDelete() {
    try {
      api.delete(`http://localhost:3000/client/${idClient}`);

      getClientsList();
      alert("Cliente excluído com sucesso");
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível excluir o cliente.");
      }
    }
  }

  useEffect(() => {
    getClientsList();
  }, []);

  useEffect(() => {
    getCurrentClient();
  }, [idClient]);

  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <Section>
          <Register>
            <h2>Cadastrar novo cliente</h2>
            <Input
              icon={FiUser}
              placeholder="Nome"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={FiMail}
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={FiPhone}
              placeholder="Telefone"
              type="tel"
              onChange={(e) => setTelephone(Number(e.target.value))}
            />
            <Input
              icon={FiHome}
              placeholder="Endereço"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              icon={FiCreditCard}
              placeholder="CPF"
              type="text"
              onChange={(e) => setCpf(Number(e.target.value))}
            />
            <Button title="Cadastrar" onClick={handleSignUp} />
          </Register>
          <Details>
            <h2>Dados do Cliente</h2>
            <Input
              icon={FiUser}
              placeholder={currentClient ? currentClient.name : ""}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={FiMail}
              placeholder={currentClient ? currentClient.email : ""}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={FiPhone}
              placeholder={currentClient ? String(currentClient.telephone) : ""}
              type="tel"
              onChange={(e) => setTelephone(Number(e.target.value))}
            />
            <Input
              icon={FiHome}
              placeholder={currentClient ? currentClient.address : ""}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              icon={FiCreditCard}
              placeholder={currentClient ? String(currentClient.cpf) : ""}
              type="text"
              onChange={(e) => setCpf(Number(e.target.value))}
            />
            <section>
              <Button title="Atualizar" onClick={handleUpdate} />
              <Button title="Excluir" onClick={handleDelete} />
            </section>
          </Details>
        </Section>
        <Clients>
          <h2>Lista de Clientes | Clique neles para editar</h2>
          {clientsList.map((client: clientProps) => (
            <a key={client._id} onClick={() => setIdClient(client._id)}>
              {client.name}
            </a>
          ))}
        </Clients>
      </Page>
    </Container>
  );
}
