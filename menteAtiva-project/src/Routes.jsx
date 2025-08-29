import { Routes, Route, Navigate} from "react-router-dom";

import { LayoutMateria, LayoutPadrao } from "./layouts";

import { Inicial, NotFound, QuemSomos, Sobre, Cadastro, Introducao, Matematica, CienciasHumanas} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />

        <Route path="/materias" element={<LayoutMateria />}>
          <Route index element={<Navigate to="introducao" replace />} />
          <Route path="introducao" element={<Introducao />} />
          <Route path="matematica" element={<Matematica />} />
          <Route path="cienciasHumanas" element={<CienciasHumanas />} />
        </Route>

        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/entrar" element={<Cadastro />} />
        {/* <Route path="/cadastrar" element={<Cadastrar />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Router };
