import { Link, NavLink } from "react-router-dom";
import style from "./inicial.module.css";

const Inicial = () => {
  return (
    <div className={style.containerB}>
      {/* Fundo Ondas */}
      <div className={style.fundoOndas}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>

      {/* Hero */}
      <section className={style.hero}>
        <div className={style.textoH}>
          <h1>
            Aprender nunca foi tão <span>interativo!</span>
          </h1>
          <button className={style.cta}>
            <NavLink to="/materias">Começar Agora</NavLink>
          </button>
        </div>
      </section>

      <div className={style.containerA}>
        {/* Objetivos */}
        <section className={style.objetivo}>
          <h2 className={style.titulo}>🎯 Nosso Objetivo</h2>
          <p className={style.descricao}>
            O <strong>Mente Ativa</strong> nasceu para ajudar você, estudante do
            ensino médio, a alcançar o seu máximo potencial. 🚀
          </p>

          <div className={style.cards}>
            <div className={style.card}>
              <span className={style.icon}>📈</span>
              <h3>Potencial Máximo</h3>
              <p>Te ajudamos a chegar cada vez mais perto dos seus sonhos.</p>
            </div>

            <div className={style.card}>
              <span className={style.icon}>📚</span>
              <h3>Conteúdo de Qualidade</h3>
              <p>
                Explicações claras, dinâmicas e focadas no ENEM e disciplinas.
              </p>
            </div>

            <div className={style.card}>
              <span className={style.icon}>😊</span>
              <h3>Aprendizado Leve</h3>
              <p>
                Estudar de forma motivadora, acessível e sem peso no dia a dia.
              </p>
            </div>
          </div>
        </section>
        <br />

        {/* Vestibulares */}
        <section className={style.vestibulares}>
          <h2>Principais vestibulares</h2> <br /> <br />
          <div className={style.vestibularesContent}>
            <div className={style.texto}>
              <div className={style.vestibularCard}>
                <h3>📝 Enem</h3>
                <p>
                  Já pensou em garantir a sua vaga em uma boa universidade? O
                  ENEM pode ser o seu passaporte! Aqui, você encontra dicas e
                  estratégias para mandar bem na prova.
                </p>
              </div>

              <div className={style.vestibularCard}>
                <h3>🎓 Fuvest</h3>
                <p>
                  A Fuvest é um dos vestibulares mais concorridos do Brasil.
                  Vamos juntos descomplicar os conteúdos, compartilhar macetes e
                  trazer histórias inspiradoras de quem já passou por esse
                  desafio.
                </p>
              </div>

              <div className={style.vestibularCard}>
                <h3>📚 Unicamp</h3>
                <p>
                  Quer entender como funciona a Unicamp e se preparar da melhor
                  forma? Nós te ajudamos com informações detalhadas, explicações
                  claras e muita prática.
                </p>
              </div>

              <button className={style.btn}>
                <a href="https://www.google.com/"> Conferir agora</a>
              </button>
            </div>
          </div>
        </section>
        {/* 3. Seção de matérias */}
        <section className={style.materias}>
          <h2 className={style.titulo}>Nossas matérias em destaques</h2>
          <div className={style.cards}>
            <Link to="/materias/matematica">
            <div className={style.card}>
              <span className={style.icon}>🧮</span>
              <h3>Matemática</h3>
              <p>
                Aprenda álgebra, geometria, funções e mais de forma interativa.
              </p>
            </div>
            </Link>

            <Link to="/materias/cienciasNatureza/quimica">
            <div className={style.card}>
              <span className={style.icon}>⚗️</span>
              <h3>Química</h3>
              <p>
                Explore experimentos, fórmulas e conceitos essenciais da
                química.
              </p>
            </div>
            </Link>

            <Link to="/materias/cienciasnatureza/fisica">
            <div className={style.card}>
              <span className={style.icon}>🔬</span>
              <h3>Física</h3>
              <p>
                Compreenda leis, teorias e exercícios práticos do mundo físico.
              </p>
            </div>
            </Link>

            <Link to="/materias/linguagens/portugues">
            <div className={style.card}>
              <span className={style.icon}>📖</span>
              <h3>Português</h3>
              <p>
                Melhore interpretação de texto, gramática e escrita criativa.
              </p>
            </div>
            </Link>

            <Link to="/materias/cienciasHumanas/historia">
            <div className={style.card}>
              <span className={style.icon}>🏛️</span>
              <h3>História</h3>
              <p>
                Explore os grandes eventos, civilizações e períodos históricos de forma interativa.
              </p>
            </div>
            </Link>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export { Inicial };
