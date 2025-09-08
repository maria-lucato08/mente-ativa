import { Link } from "react-router-dom";
import style from "./CienciasHumanas.module.css";

const CienciasHumanas = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>CIÊNCIAS HUMANAS E SOCIAIS</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h2>História</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasHumanas/historia">Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Filosofia</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasHumanas/filosofia"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Geografia</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasHumanas/geografia">Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Sociologia</h2>
            <button className={style.btn}>
              <Link to="/materias/cienciasHumanas/sociologia">Conferir agora</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { CienciasHumanas };
