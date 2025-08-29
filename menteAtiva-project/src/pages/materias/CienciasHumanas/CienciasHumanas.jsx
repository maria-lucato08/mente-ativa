import style from "./CienciasHumanas.module.css";

const CienciasHumanas = () => {
  return (
    <section className={style.container}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>
          <span>CIENCIAS HUMANAS E SOCIAIS</span>
        </h1>
        <button className={style.botao}>Começar Estudos</button>
      </div>
    </section>
  );
};

export { CienciasHumanas };
