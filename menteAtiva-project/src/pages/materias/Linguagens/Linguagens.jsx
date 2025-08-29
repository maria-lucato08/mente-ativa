import style from "./Linguagens.module.css";

const Linguagens = () => {
  return (
    <section className={style.container}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>
          <span>LINGUAGENS</span>
        </h1>
        <button className={style.botao}>Começar Estudos</button>
      </div>
    </section>
  );
};

export { Linguagens };
