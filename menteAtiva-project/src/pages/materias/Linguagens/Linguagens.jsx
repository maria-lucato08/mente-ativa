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
            <h3>Progressões</h3>
            <h4>P.A e P.G</h4>
            <p>
              Na PA os termos são obtidos somando a diferença comum ao
              antecessor, os termos de uma PG são encontrados ao multiplicar a
              razão pelo último número da sequência.
            </p>
            <button className={style.btn}>
              <Link to="/materias/matematica/pa-pg"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Funções</h3>
            <h4>Conceitos e Tipos</h4>
            <p>
              Relação entre dois conjuntos em que cada elemento do primeiro
              conjunto domínio corresponde a exatamente um elemento do segundo
              conjunto contradomínio.
            </p>
            <button className={style.btn}>
              <Link to="/materias/matematica/funcoes"> Conferir agora</Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Estatística</h3>
            <h4>
              Frequências, medidas estatísticas e representação e interpretação
            </h4>
            <p>
              Estudo de como coletar, organizar, analisar e interpretar dados,
              usando médias, dispersão e gráficos para entender informações e
              tomar decisões.
            </p>
            <button className={style.btn}>
              <Link to="/materias/matematica/estatisticas">
                {" "}
                Conferir agora
              </Link>
            </button>
          </div>
          <div className={style.vestibularCard}>
            <h3>Probabilidade</h3>
            <h4>Porcentagem e Aplicações Práticas</h4>
            <p>
              Onde é medida a chance de um evento ocorrer, considerando todos os
              casos possíveis, simples ou compostos, independentes ou
              dependentes.
            </p>
            <button className={style.btn}>
              <Link to="/materias/matematica/probabilidade">
                {" "}
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
