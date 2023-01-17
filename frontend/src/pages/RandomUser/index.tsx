import { Container, Page, Pagination, Search, UserList } from "./styles";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Input } from "../../components/Input";
import { User, userProps } from "../../components/User";

export function RandomUser() {
  const [usersList, setUsersList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  function pageDown() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function pageUp() {
    if (page < 10) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get(
        `https://randomuser.me/api/?results=10&nat=br&inc=name,picture,email,login,dob&seed=abc?page=${page}`
      );
      setUsersList(response.data.results);
    }
    fetchUsers();
  }, [page]);

  function searchUser() {
    const found = usersList.find(
      (element: userProps) => element.name.first == search
    );
    return found;
  }

  let userFound = searchUser();

  useEffect(() => {
    searchUser();
    userFound = searchUser();
  }, [search]);

  return (
    <Container>
      <Header />
      <Menu />
      <Page>
        <Search>
          <Input
            icon={FiSearch}
            type="text"
            placeholder="Busque seu usuário"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Pagination>
          <a onClick={pageDown}>
            <FiArrowLeft />
          </a>
          <p>Página {page}</p>
          <a onClick={pageUp}>
            <FiArrowRight />
          </a>
        </Pagination>
        {!search ? (
          <UserList>
            {usersList.map((user, i) => (
              <User key={i} data={user} />
            ))}
          </UserList>
        ) : (
          <div>
            {!userFound ? (
              <p>Nenhum usuário encontrado</p>
            ) : (
              <User data={userFound} />
            )}
          </div>
        )}
      </Page>
    </Container>
  );
}
