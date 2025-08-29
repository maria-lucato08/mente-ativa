import style from "./Introducao.module.css";

const Introducao = () => {
  return (
    <section className={style.hero}>
      <div className={style.texto}>
        <h1>
          Vestibular não é <span>sorte</span>, é <span>preparo!</span>
        </h1>
        <p>Estamos aqui para te ajudar a conquistar seus sonhos acadêmicos</p>
        <button className={style.cta}>Começar Agora</button>
      </div>
    </section>
  );
};

export { Introducao };
