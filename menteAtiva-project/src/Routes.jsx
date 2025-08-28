import { Routes, Route } from "react-router-dom";

import { LayoutPadrao } from "./layouts";

import { Inicial, Materias, NotFound, QuemSomos, Sobre, Cadastro} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/entrar" element={<Cadastro/>} />
         {/* <Route path="/cadastrar" element={<Cadastrar />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  );
};

export { Router };
