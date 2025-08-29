import style from "./Matematica.module.css";

const Matematica = () => {
    return(
       <section className={style.container}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>
          <span>MATEMATICA</span> 
        </h1>
        <button className={style.botao}>Começar Estudos</button>
      </div>
    </section>
    );
};

export { Matematica };