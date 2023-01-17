import { BrowserRouter } from "react-router-dom";

import { ContextType, useAuth } from "../hooks/auth";

import { SignIn } from "../pages/SignIn";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user }: ContextType = useAuth()

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <SignIn />}
    </BrowserRouter>
  );
}
