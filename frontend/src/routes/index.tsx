import { BrowserRouter } from "react-router-dom";

import { ContextType, useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export function Routes() {
  const { user }: ContextType = useAuth()

  return (
    <BrowserRouter>
      {user ? <Home /> : <SignIn />}
    </BrowserRouter>
  );
}
