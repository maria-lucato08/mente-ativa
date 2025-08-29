import { Calculator, Atom, BookOpen, MessageCircle} from "lucide-react";
import style from "./ConteudoMateria.module.css"
import { NavLink } from "react-router-dom";

const ConteudoMateria = (props) => {
    const { children } = props;
  
    return (
    <div className={style.container}>
      {/* Fundo Ondas */}
      <div className={style.fundoOndas}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>

      {/* Navbar */}
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink to="/materias/matematica">
              <Calculator size={18} /> Matemática
            </NavLink>
          </li>
          <li>
            <NavLink to="/materias/cienciasNatureza">
              <Atom size={18} /> Ciências da Natureza
            </NavLink>
          </li>
          <li>
           <NavLink to="/materias/cienciasHumanas">
              <BookOpen size={18} /> Ciências Humanas e Sociais
            </NavLink>
          </li>
          <li className={style.dropdown}>
           <NavLink to="/materias/linguagens">
              <MessageCircle size={18} /> Linguagens
            </NavLink>
          </li>
        </ul>
      </nav>
       <div>{ children }</div> 
    </div>
  );
};

export { ConteudoMateria };
