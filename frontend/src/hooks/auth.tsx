import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export interface UserData {
  user?: string;
  token?: string;
}

export interface UserProps {
  id?: string;
  username: string;
  password: string;
  remember: boolean;
}

export interface ContextType {
  user?: UserProps;
  signIn: ({}: UserProps) => void;
  signOut: () => void;
}

const AuthContext = createContext<ContextType>({ signIn({}) {}, signOut() {} });

function AuthProvider({ children }: any) {
  const [data, setData] = useState<UserData>({});

  async function signIn({ username, password, remember }: UserProps) {
    try {
      const response = await api.post("/login", { username, password });
      const { user, token } = response.data;

      if (remember) {
        localStorage.setItem("@sharenergy:user", JSON.stringify(user));
        localStorage.setItem("@sharenergy:token", token);
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@sharenergy:user");
    localStorage.removeItem("@sharenergy:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@sharenergy:user");
    const token = localStorage.getItem("@sharenergy:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
