import { Botao, TIPO_BOTAO } from "./src/componentes/botao";

import style from "./cabecalho.module.css";

const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
      <nav>
        <img src="./assets/JUNCAO.png" alt="Logo Mente Ativa" width={200} height={100} />
        <p>Matérias</p>
        <p>Quem Somos</p>
        <p>Sobre</p>
        <Botao texto="Entrar"/>
        <Botao texto="Criar conta" tipo={TIPO_BOTAO.SECUNDARIO}/>
      </nav>
    </header>
  );
};

export { Cabecalho };
