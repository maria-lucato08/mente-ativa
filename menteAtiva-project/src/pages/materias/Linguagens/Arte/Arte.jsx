import { Link } from "react-router-dom";
import style from "./Arte.module.css";

const Arte = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>ARTE</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h3>Linguagem e Criação Artística</h3>
            <h4>Como a arte se expressa e se transforma</h4>
            <p>
              Conhecendo códigos, símbolos e estilos artísticos, bem como as
              etapas e técnicas do processo criativo.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/arte/linguagemCracao"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Materiais, Técnicas e Patrimônio</h3>
            <h4>O que constrói e preserva a arte</h4>
            <p>
              Exploramos os materiais e suportes usados nas produções, além da
              preservação e valorização do patrimônio artístico e cultural.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/arte/tecnicasPatrimonio"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Arte, Cultura e Sociedade</h3>
            <h4>A arte como reflexo e influência social</h4>
            <p>
              Analisa o papel da arte na cultura, suas influências históricas e
              sociais, e sua diversidade estética no Brasil e no mundo.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/arte/culturaSociedade">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Arte };
