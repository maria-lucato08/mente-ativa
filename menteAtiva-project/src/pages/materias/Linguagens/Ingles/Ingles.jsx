import { Link } from "react-router-dom";
import style from "./ingles.module.css";

const Ingles = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>LÍGUA INGLESA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h3>Práticas de Escuta e Oralidade</h3>
            <h4>Compreensão e produção oral</h4>
            <p>
              Trabalhamos com a escuta atenta, tomada de notas, entonação,
              ritmo, planejamento e produção de textos orais em diferentes
              contextos e plataformas.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/ingles/escuta-oralidade">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Práticas de Leitura e Escrita</h3>
            <h4>Interpretação e produção de textos</h4>
            <p>
              DesenvolveMOS estratégias de leitura (skimming e scanning),
              compreensão de textos escritos e multissemióticos, além da
              produção de gêneros adequados à cultura digital.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/ingles/leitura-escrita">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Práticas de Análise Linguística</h3>
            <h4>Vocabulário, gramática e cultura</h4>
            <p>
              Explora terminologias técnicas, formação de palavras, variação
              linguística, estruturas morfossintáticas e elementos culturais de
              países de língua inglesa.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/ingles/analiseLinguistica">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Ingles };
