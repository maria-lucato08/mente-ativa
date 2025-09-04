import { Link } from "react-router-dom";
import style from "./Portugues.module.css";

const Portugues = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>LÍGUA PORTUGUESA</h1>
      </div>
      <section className={style.vestibulares}>

        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h3>🗣️Oralidade e Comunicação</h3>
            <h4>Debate, escuta e expressão oral</h4>
            <p>
              Trabalha escuta atenta, debates, apresentações e o uso de recursos
              multissemióticos em contextos sociais.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/oralidade-comunicacao">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>📖Interpretação e Leitura</h3>
            <h4>Compreensão crítica de textos</h4>
            <p>
              Estratégias de leitura e compreensão de textos diversos
              (literários, jornalísticos, científicos e digitais), com análise
              de sentidos e intenções.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/interpretacao-leitura">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>✍️Redação e Produção Textual</h3>
            <h4>Do planejamento à revisão</h4>
            <p>
              Planejamento e escrita de textos em diferentes gêneros, uso de
              argumentação, coesão, ferramentas digitais e revisão.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/redacao">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>📚Literatura e Cultura</h3>
            <h4>Obras, movimentos e contextos</h4>
            <p>
              Estudo e apreciação da literatura brasileira, portuguesa,
              indígena, africana e latino-americana, com análise de estilos,
              movimentos e contextos históricos.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/literatura">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>

        <div className={style.segundosCards}>
          <div className={style.vestibularCard}>
            <h3>🔤Gramática e Análise Linguística</h3>
            <h4>Norma, variação e efeitos de sentido</h4>
            <p>
              Estudo da morfossintaxe, variação linguística, estilística,
              coesão, coerência e usos da norma-padrão.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/gramatica-analise">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>📰Textos Midiáticos e Digitais</h3>
            <h4>Jornalismo, publicidade e cultura digital</h4>
            <p>
              Leitura, análise e produção de textos jornalísticos,
              publicitários, científicos e da cultura digital (fake news,
              podcasts, vlogs, fanfics, resenhas).
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/textoMidiaticos">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>🧠Crítica e Argumentação</h3>
            <h4>Tese, evidências e contra-argumento</h4>
            <p>
              Desenvolvimento do pensamento crítico, posicionamento responsável
              em debates, construção de teses, defesa de ideias e refutação.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/portugues/critica-argumentacao">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Portugues };
