import { Calculator, Atom, BookOpen, MessageCircle } from "lucide-react";
import Particles from "react-tsparticles";

import style from "./materias.module.css";

const Materias = () => {
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
        <a href="#">
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

  {/* Hero */}
  <section className={style.hero}>
    <div className={style.texto}>
      <h1>
        Vestibular não é <span>sorte</span>, é <span>preparo!</span>
      </h1>
      <p>Estamos aqui para te ajudar a conquistar seus sonhos acadêmicos</p>
      <button className={style.cta}>Começar Agora</button>
    </div>
    <div className={style.imagem}>
      {/* <img src="..." alt="Estudantes" /> */}
    </div>
  </section>
</div>

  );
};

export { Materias };
