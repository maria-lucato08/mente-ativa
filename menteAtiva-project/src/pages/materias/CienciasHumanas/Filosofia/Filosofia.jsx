import { Link } from "react-router-dom";
import style from "./Filosofia.module.css";

const Filosofia = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "🏛️Origens e Campos da Filosofia",
      subTitulo: "Da atitude filosófica aos primeiros debates",
      resumo:
        "Estuda o nascimento da filosofia, períodos de investigação, embate entre mitologia e pensamento pré-socrático, além da busca pela verdade e pelos diferentes tipos de conhecimento.",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 2,
      titulo: "🎭Filosofia, Arte e Estética",
      subTitulo: "Reflexões do teatro grego ao cinema",
      resumo:
        "Analisa a arte como forma de pensamento, as críticas sociais, e os conceitos de beleza e valor estético na história da filosofia.",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 3,
      titulo: "⚖️Ética e Moral",
      subTitulo: "Virtudes, dever e utilitarismo",
      resumo:
        "Aprofunda as diferentes concepções éticas, dos filósofos antigos à contemporaneidade, abordando virtudes, dever, utilitarismo e os desafios morais atuais.",
      rota: "",
    },
    {
      id: 4,
      titulo: "🌍Democracia, Cidadania e Poder",
      subTitulo: "Da Antiguidade à modernidade",
      resumo:
        "Discute democracia, cidadania e relações de poder, desde a democracia grega até o pensamento contratualista e as formas de governo modernas.",
      rota: "",
    },
    {
      id: 5,
      titulo: "🧬Bioética e Tecnologia",
      subTitulo: "Dilemas éticos da ciência",
      resumo:
        "Debate os desafios éticos da ciência e tecnologia, incluindo bioética, direitos animais, questões ambientais e conflitos entre ciência e religião.",
      rota: "",
    },
    {
      id: 6,
      titulo: "🏙️Indivíduo e Sociedade",
      subTitulo: "Subjetividade e coletividade",
      resumo:
        "Evolução da economia, industrialização e políticas econômicas globais, destacando a Segunda Revolução Industrial e a economia contemporânea.",
      rota: "",
    },
    {
      id: 7,
      titulo: "🏺Civilizações e Períodos Históricos",
      subTitulo: "Origens e legados das sociedades antigas",
      resumo:
        "Reflete sobre identidade, alteridade, empatia e sociabilidade, abordando infância, juventude, velhice, e as tensões entre indivíduo e coletivo.",
      rota: "",
    },
    {
      id: 8,
      titulo: "📢Escola de Frankfurt e Cultura de Massa",
      subTitulo: "Indústria cultural e sociedade contemporânea",
      resumo:
        "Analisa o conceito de cultura de massa, consumo e publicidade, com base nos pensadores da Escola de Frankfurt.",
      rota: "",
    },
    {
      id: 9,
      titulo: "🛠️Trabalho, Consumo e Alienação",
      subTitulo: "Produção e crítica social",
      resumo:
        "Estuda a relação entre trabalho, consumo e alienação, destacando o papel do Estado, da tecnologia e dos pensadores modernos na compreensão do capitalismo.",
      rota: "",
    },
    {
      id: 10,
      titulo: "🏛️Liberalismo, Socialismo e Outros Movimentos",
      subTitulo: "Filosofia política e economia",
      resumo:
        "Aborda as correntes do pensamento político moderno — liberalismo, anarquismo, socialismo e comunismo — e suas influências no trabalho, economia e democracia.",
      rota: "",
    },
    {
      id: 11,
      titulo: "🌐Globalização e Direitos Humanos",
      subTitulo: "Ética global e desafios contemporâneos",
      resumo:
        "Explora os impactos da globalização, desigualdades sociais, organismos internacionais e a luta pela garantia de direitos e democracia no mundo atual.",
      rota: "",
    },
  ];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>FILOSOFIA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos.slice(0, 8).map((item, index) => (
            <div key={index} className={style.vestibularCard}>
              <h3>{item.titulo}</h3>
              <h4>{item.subTitulo}</h4>
              <p>{item.resumo}</p>
              <button className={style.btn}>
                <Link to={item.rota}> Conferir agora</Link>
              </button>
            </div>
          ))}
        </div>
        <div className={style.ultimosCards}>
          {assuntos.slice(8).map((item, index) => (
            <div key={index + 8} className={style.vestibularCard}>
              <h3>{item.titulo}</h3>
              <h4>{item.subTitulo}</h4>
              <p>{item.resumo}</p>
              <button className={style.btn}>
                <Link to={item.rota}> Conferir agora</Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Filosofia };
