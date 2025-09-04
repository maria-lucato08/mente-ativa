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
  Historia,
  Filosofia,
  Geografia,
  Sociologia,

  CienciasNatureza,
  Fisica,
  Quimica,
  Biologia,
  
  Linguagens,
  Portugues,
  Ingles,
  EdFisica,

  Arte,
  CulturaSociedade,
  LinguagemCriacao,
  TecnicasPatrimonio,
  
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
          <Route path="cienciasHumanas/historia" element={<Historia />} />
          <Route path="cienciasHumanas/filosofia" element={<Filosofia />} />
          <Route path="cienciasHumanas/geografia" element={<Geografia />} />
          <Route path="cienciasHumanas/sociologia" element={<Sociologia />} />

          <Route path="cienciasNatureza" element={<CienciasNatureza />} />
          <Route path="cienciasNatureza/fisica" element={<Fisica />} />
          <Route path="cienciasNatureza/quimica" element={<Quimica />} />
          <Route path="cienciasNatureza/biologia" element={<Biologia />} />

          <Route path="linguagens" element={<Linguagens />} />
          <Route path="linguagens/portugues" element={<Portugues />} />
          <Route path="linguagens/ingles" element={<Ingles />} />
          <Route path="linguagens/edFisica" element={<EdFisica />} />
          <Route path="linguagens/arte" element={<Arte />} />
          <Route path="linguagens/arte/linguagemCracao" element={<LinguagemCriacao />} />
          <Route path="linguagens/arte/tecnicasPatrimonio" element={<TecnicasPatrimonio />} />
          <Route path="linguagens/arte/culturaSociedade" element={<CulturaSociedade />} />
          
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
