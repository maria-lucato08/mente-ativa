import style from "./sobre.module.css";
import sobreImg from "/assets/sobre.png";

const Sobre = () => {
  return (
    <div className={style.containerB}>
      {/* Fundo Ondas */}
      <div className={style.fundoOndas}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>

      <div className={style.Sobre}>
        <main>
          <section
            className={style.hero}
            style={{ backgroundImage: `url(${sobreImg})` }}
          >
            <div className={style.overlay}>
              <h1>Sobre o Mente Ativa</h1>
              <p>
                Tornando o aprendizado mais acessível, motivador e eficiente
                para todos os estudantes do ensino médio.
              </p>
              {/* <button className={style.btnHero}>Saiba Mais</button> */}
            </div>
          </section>

            <div className={style.conteudo}>
              <section className={style.card}>
                <div className={style.texto}>
                  <h2 className={style.titulo}>🎯 Nosso Objetivo</h2>
                  <p>
                    O Mente Ativa nasceu para ajudar estudantes do ensino médio
                    a desenvolverem todo o seu potencial, oferecendo conteúdos
                    claros, dinâmicos e de qualidade sobre as diversas
                    disciplinas, além de preparar para o ENEM.
                  </p>
                </div>
              </section>

              <section className={style.card}>
                <h2 className={style.titulo}>
                  🚀 Como realizamos nosso objetivo?
                </h2>
                <p>
                  Trabalhamos com conteúdos claros, dinâmicos e de qualidade
                  sobre as diversas disciplinas, além de preparar para o ENEM.
                  Queremos transformar o aprendizado em uma experiência
                  motivadora e acessível.
                </p>
              </section>

              <section className={style.card}>
                <h2 className={style.titulo}>📖 Nossa história</h2>
                <p>
                  O Mente Ativa nasceu do desejo de transformar a forma como os
                  estudantes do ensino médio aprendem, tornando o estudo mais
                  próximo, prático e motivador.
                </p>
              </section>

              <section className={style.card}>
                <h2 className={style.titulo}>💡 Mudando vidas</h2>
                <p>
                  Nosso propósito é impactar a vida dos alunos, mostrando que
                  estudar pode ser acessível, eficiente e transformador.
                </p>
              </section>
            </div>
        </main>
      </div>
    </div>
  );
};

export { Sobre };
