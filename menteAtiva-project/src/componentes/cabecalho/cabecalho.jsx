import { NavLink } from "react-router-dom";
import { Botao, TIPO_BOTAO } from "../Botao";
import style from "./Cabecalho.module.css";
import { useAuth } from "../../hook";

const Cabecalho = () => {
  const { user, logout } = useAuth(); 

  return (
    <header className={style.cabecalho}>
      <nav>
        <NavLink to="/">
          <img
            src="./assets/logo+escrita.png"
            alt="Logo Mente Ativa"
            width={200}
            height={100}
          />
        </NavLink>
        <div className={style.linksMenu}>
          <NavLink to="/materias">Matérias</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>

        {user ? (
          <div className={style.logado}> 
            <span>{user.username}</span>
            <button onClick={logout}>Sair</button>
          </div>
        ) : (
          <NavLink to="/login">
            <Botao tipo={TIPO_BOTAO.PRIMARIO} texto="Login" />
          </NavLink>
        )}
        </nav>
    </header>
  );
};

export { Cabecalho };
