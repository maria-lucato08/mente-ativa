import style from "./Introducao.module.css";

const Introducao = () => {
  return (
    <section className={style.hero}>
      <div className={style.texto}>
        <h1>
          Aqui você enconotrará <span>todas</span> as matérias e <span>assuntos!</span>
        </h1>
        <p>Melhores </p>
        <button className={style.cta}>Começar Agora</button>
      </div>
      <div className={style.img}>
        <img src="../assets/imgMaterias.png"></img>
      </div>
    </section>
  );
};

export { Introducao };
