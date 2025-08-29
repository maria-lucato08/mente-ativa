import style from "./Matematica.module.css";

const Matematica = () => {
    return(
       <section className={style.container}>
      <div className={style.conteudo}>
        <h1 className={style.titulo}>
          Matemática é a <span>base</span> para o sucesso! 📐
        </h1>
        <p className={style.texto}>
          Explore os principais conceitos de álgebra, geometria, funções e
          muito mais. Aqui você encontrará materiais interativos para fortalecer
          sua preparação para o vestibular.
        </p>
        <button className={style.botao}>Começar Estudos</button>
      </div>
    </section>
    );
};

export { Matematica };