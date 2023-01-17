import { Container } from "./styles";

interface dataProps {
  data: userProps;
}

export interface userProps {
  picture: pictureProps;
  name: nameProps;
  email: string;
  login: loginProps;
  dob: dobProps;
}

interface nameProps {
  first: string;
  last: string;
}

interface pictureProps {
  medium: string;
}

interface loginProps {
  username: string;
}

interface dobProps {
  age: string;
}

export function User({ data, ...rest }: dataProps) {
  return (
    <Container {...rest}>
      <img src={data.picture.medium} alt="Foto do Usuário" />
      <h2>
        {data.name.first} {data.name.last}
      </h2>
      <p>{data.email}</p>
      <p>Username: {data.login.username}</p>
      <p>{data.dob.age} anos</p>
    </Container>
  );
}
