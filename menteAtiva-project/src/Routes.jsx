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
  EscutaOralidade,
  LeituraEscrita,
  AnaliseLinguistica,
  
  EdFisica,
  BrincadeirasJogos,
  Esportes,
  Ginastica,
  Danca,
  Luta,
  CorporaisAventura,
  MovimentoSaude,

  Arte,
  CulturaSociedade,
  LinguagemCriacao,
  TecnicasPatrimonio,
  OralidadeComunicacao,
  InterpretacaoLeitura,
  Redacao,
  Literatura,
  Gramatica,
  TextosMidiaticos,
  CriticaArgumentacao,
  
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
          <Route path="linguagens/portugues/oralidade-comunicacao" element={<OralidadeComunicacao />} />
          <Route path="linguagens/portugues/interpretacao-leitura" element={<InterpretacaoLeitura />} />
          <Route path="linguagens/portugues/redacao" element={<Redacao />} />
          <Route path="linguagens/portugues/literatura" element={<Literatura />} />
          <Route path="linguagens/portugues/gramatica-analise" element={<Gramatica />} />
          <Route path="linguagens/portugues/textoMidiaticos" element={<TextosMidiaticos />} />
          <Route path="linguagens/portugues/critica-argumentacao" element={<CriticaArgumentacao />} />


          <Route path="linguagens/ingles" element={<Ingles />} />
          <Route path="linguagens/ingles/escuta-oralidade" element={<EscutaOralidade />} />
          <Route path="linguagens/ingles/leitura-escrita" element={<LeituraEscrita />} />
          <Route path="linguagens/ingles/analiseLinguistica" element={<AnaliseLinguistica />} />

          <Route path="linguagens/edFisica" element={<EdFisica />} />
          <Route path="linguagens/edFisica/brincadeirasJogos" element={<BrincadeirasJogos />} />
          <Route path="linguagens/edFisica/esportes" element={<Esportes />} />
          <Route path="linguagens/edFisica/danca" element={<Danca />} />
          <Route path="linguagens/edFisica/gisnastica" element={<Ginastica />} />
          <Route path="linguagens/edFisica/luta" element={<Luta />} />
          <Route path="linguagens/edFisica/praticasCorporais-aventura" element={<CorporaisAventura />} />
          <Route path="linguagens/edFisica/corpo-movimento-saude" element={<MovimentoSaude />} />

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
