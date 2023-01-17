import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { RandomUser } from "../pages/RandomUser";
import { HTTPCat } from "../pages/HTTPCat";
import { RandomDog } from "../pages/RandomDog";
import { ClientsList } from "../pages/ClientsList";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<RandomUser />} />
      <Route path="/cat" element={<HTTPCat />} />
      <Route path="/dog" element={<RandomDog />} />
      <Route path="/clients" element={<ClientsList />} />
    </Routes>
  );
}
