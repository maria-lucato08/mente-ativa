import style from "./CienciasNatureza.module.css";

const CienciasNatureza = () => {
  return (
    <section className={style.container}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>
          <span>CIENCIAS DA NATUREZA</span>
        </h1>
        <button className={style.botao}>Começar Estudos</button>
      </div>
    </section>
  );
};

export { CienciasNatureza };
