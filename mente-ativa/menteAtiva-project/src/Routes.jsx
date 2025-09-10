import { Routes, Route, Navigate } from "react-router-dom";
import { LayoutMateria, LayoutPadrao } from "./layouts";
import  {PrivateRoutes} from "./componentes"; 

import {
  Inicial,
  NotFound,
  QuemSomos,
  Sobre,
  Login,

  Introducao,

  Matematica,
  EstudoMatematica,

  CienciasHumanas,
  Historia,
  EstudoHistoria,

  Filosofia,
  Estudofilosofia,
  
  Geografia,
  EstudoGeografia,
  
  Sociologia,
  EstudoSociologia,

  CienciasNatureza,
  Fisica,
  EstudoFisica,

  Quimica,
  EstudoQuimica,

  Biologia,
  EstudoBiologia,
  
  Linguagens,
  Portugues,
  EstudoPortugues,
  
  Ingles,
  EstudoIngles,
  
  EdFisica,
  EstudoEdFisica,
  
  Arte,
  EstudoArte,
  
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />

        <Route path="/materias" element={<PrivateRoutes> <LayoutMateria /> </PrivateRoutes>}>
          <Route index element={<Navigate to="introducao" replace />} />
          <Route path="introducao" element={<Introducao />} />

          <Route path="matematica" element={<Matematica />} />
          <Route path="matematica/:id" element={<EstudoMatematica />} />

          <Route path="cienciasHumanas" element={<CienciasHumanas />} />
          <Route path="cienciasHumanas/historia" element={<Historia />} />
          <Route path="cienciasHumanas/historia/:id" element={<EstudoHistoria />} />

          <Route path="cienciasHumanas/filosofia" element={<Filosofia />} />
          <Route path="cienciasHumanas/filosofia/:id" element={<Estudofilosofia />} />

          <Route path="cienciasHumanas/geografia" element={<Geografia />} />
          <Route path="cienciasHumanas/geografia/:id" element={<EstudoGeografia />} />

          <Route path="cienciasHumanas/sociologia" element={<Sociologia />} />
          <Route path="cienciasHumanas/sociologia/:id" element={<EstudoSociologia />} />

          <Route path="cienciasNatureza" element={<CienciasNatureza />} />
          <Route path="cienciasNatureza/fisica" element={<Fisica />} />
          <Route path="cienciasNatureza/fisica/:id" element={<EstudoFisica />} />

          <Route path="cienciasNatureza/quimica" element={<Quimica />} />
          <Route path="cienciasNatureza/quimica/:id" element={<EstudoQuimica />} />

          <Route path="cienciasNatureza/biologia" element={<Biologia />} />
          <Route path="cienciasNatureza/biologia/:id" element={<EstudoBiologia />} />

          <Route path="linguagens" element={<Linguagens />} />
          <Route path="linguagens/portugues" element={<Portugues />} />
          <Route path="linguagens/portugues/:id" element={<EstudoPortugues />} />
       
          <Route path="linguagens/ingles" element={<Ingles />} />
          <Route path="linguagens/ingles/:id" element={<EstudoIngles />} />

          <Route path="linguagens/edFisica" element={<EdFisica />} />
          <Route path="linguagens/edFisica/:id" element={<EstudoEdFisica />} />

          <Route path="linguagens/arte" element={<Arte />} />
          <Route path="linguagens/arte/:id" element={<EstudoArte />} />
          
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
