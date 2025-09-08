import style from "./Introducao.module.css";

const Introducao = () => {
  return (
    <>
      <section className={style.hero}>
        <div className={style.texto}>
          <h1>
            Bem-vindo(a) às <span>matérias</span>
          </h1>
          <p>
            Aqui você encontrará todas as matérias organizadas de forma simples
            e prática. Navegue pelos conteúdos, revise conceitos importantes e
            acompanhe seu aprendizado de forma interativa.
          </p>
        </div>
        <div className={style.img}>
          <img src="../assets/imgMaterias.png" alt="Materias" width={220} height={350}></img>
        </div>
      </section>
      <section>
        <p className={style.dicas}>
          💡 Clique na matéria que deseja estudar. Cada seção possui resumos,
          exercícios e mapas mentais para facilitar seu aprendizado.
        </p>
      </section>
    </>
  );
};

export { Introducao };
