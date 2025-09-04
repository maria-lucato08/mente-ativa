import { Link } from "react-router-dom";
import style from "./Linguagens.module.css";

const Linguagens = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>LINGUAGENS</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h2>Língua Portuguesa</h2>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues">Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Língua Inglesa</h2>
            <button className={style.btn}>
              <Link to="/materias/linguagens/ingles"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h2>Educação Fisíca</h2>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica">Conferir agora</Link>
            </button>
          </div>
          <div className={style.vestibularCard}>
            <h2>Arte</h2>
            <button className={style.btn}>
              <Link to="/materias/linguagens/arte">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Linguagens };
