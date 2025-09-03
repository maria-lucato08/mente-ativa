import { Routes, Route, Navigate } from "react-router-dom";

import { LayoutMateria, LayoutPadrao } from "./layouts";

import {
  Inicial,
  NotFound,
  QuemSomos,
  Sobre,
  Login,

  Matematica,
  Introducao,
  Funcoes,
  PaPg,
  Estatistica,
  Probabilidade,
  Geometria,

  CienciasHumanas,
  CienciasNatureza,
  Linguagens,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />

        <Route path="/materias" element={<LayoutMateria />}>
          <Route index element={<Navigate to="introducao" replace />} />
          <Route path="introducao" element={<Introducao />} />
          <Route path="matematica" element={<Matematica />} />
          <Route path="matematica/funcoes" element={<Funcoes />} />
          <Route path="matematica/pa-pg" element={<PaPg />} />
          <Route path="matematica/estatisticas" element={<Estatistica />} />
          <Route path="matematica/probabilidade" element={<Probabilidade />} />
          <Route path="matematica/geometria" element={<Geometria />} />

          <Route path="cienciasHumanas" element={<CienciasHumanas />} />
          <Route path="cienciasNatureza" element={<CienciasNatureza />} />
          <Route path="linguagens" element={<Linguagens />} />
        </Route>
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Router };
