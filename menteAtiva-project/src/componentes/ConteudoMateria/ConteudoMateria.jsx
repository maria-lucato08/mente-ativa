import { Calculator, Atom, BookOpen, MessageCircle } from "lucide-react";
import style from "./ConteudoMateria.module.css"

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
            <a href="./Matematica">
              <Calculator size={18} /> Matemática
            </a>
          </li>
          <li>
            <a href="#">
              <Atom size={18} /> Ciências da Natureza
            </a>
          </li>
          <li>
            <a href="#">
              <BookOpen size={18} /> Ciências Humanas e Sociais
            </a>
          </li>
          <li className={style.dropdown}>
            <a href="#">
              <MessageCircle size={18} /> Linguagens
            </a>
          </li>
        </ul>
      </nav>
       <div>{ children }</div> 
    </div>
  );
};

export { ConteudoMateria };
