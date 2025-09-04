import { Link } from "react-router-dom";
import style from "./CienciasNatureza.module.css";

const CienciasNatureza = () => {
  return (
     <div className={style.pag}>
      <div className={style.titulo}>
        <h1>CIÊNCIAS DA NATUREZA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h2>Física</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasNatureza/fisica">Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Química</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasNatureza/quimica"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Biologia</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasNatureza/biologia">Conferir agora</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { CienciasNatureza };
