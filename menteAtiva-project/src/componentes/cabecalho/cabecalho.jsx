import { NavLink } from "react-router-dom";
import { Botao, TIPO_BOTAO } from "../botao";

import style from "./cabecalho.module.css";

const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
      <nav>
        <img src="./assets/JUNCAO.png" alt="Logo Mente Ativa" width={200} height={100} />
        <div>
          <NavLink to="/materias">Matérias</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
        <Botao texto="Entrar"/>
        <Botao texto="Criar conta" tipo={TIPO_BOTAO.SECUNDARIO}/>
      </nav>
    </header>
  );
};

export { Cabecalho };
