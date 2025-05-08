import React from "react";
import { Routes, Route } from "react-router-dom";
import CadastroLogin from "../pages/cadastroLogin";
import Produto from "../pages/produtos";
import Carrinho from "../conponentes/carrinho";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Produto />} />
      <Route path="/cadastroLogin " element={<CadastroLogin />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}