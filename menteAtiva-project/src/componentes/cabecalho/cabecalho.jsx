import { NavLink } from "react-router-dom";
import { Botao, TIPO_BOTAO } from "../Botao";

import style from "./cabecalho.module.css";

const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
      <nav>
          <NavLink to="/"><img src="./assets/logo+escrita.png" alt="Logo Mente Ativa" width={200} height={100}/></NavLink>
        <div>
          <NavLink to="/materias">Matérias</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <NavLink to="/entrar"><Botao texto="Entrar"/></NavLink>
        <Botao texto="Criar conta" tipo={TIPO_BOTAO.SECUNDARIO}/>
      </nav>
    </header>
  );
};

export { Cabecalho };
