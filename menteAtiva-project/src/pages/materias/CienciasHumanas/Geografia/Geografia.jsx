import { Link } from "react-router-dom";
import style from "./Geografia.module.css";

const Geografia = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "🌎Espaço, Sociedade e Natureza",
      subTitulo: "Transformações da paisagem e da sociedade",
      resumo:
        "Analisa as relações entre espaço, natureza e sociedade, destacando conflitos urbanos e rurais, turismo sustentável e impactos ambientais da ação humana.",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 2,
      titulo: "🗺️Cartografia e Geotecnologias",
      subTitulo: "Mapas e representações do espaço",
      resumo:
        "Explora técnicas cartográficas, mapas temáticos e geotecnologias aplicadas à compreensão de territórios, desigualdades e dinâmicas espaciais.",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 3,
      titulo: "🧭Território, Fronteira e Geopolítica",
      subTitulo: "Poder e disputas no espaço geográfico",
      resumo:
        "Estuda fronteiras, territorialidade e geopolítica, abordando potências mundiais, organismos internacionais, conflitos e desigualdade no uso do espaço.",
      rota: "",
    },
    {
      id: 4,
      titulo: "🌱Meio Ambiente e Sustentabilidade",
      subTitulo: "Desafios ambientais e consumo",
      resumo:
        "Debate mudanças climáticas, políticas ambientais, impactos da produção e consumo, agropecuária e práticas sustentáveis em escala global e local.",
      rota: "",
    },
    {
      id: 5,
      titulo: "👥Sociedade, Cultura e Direitos Humanos",
      subTitulo: "Diversidade e desigualdade social",
      resumo:
        "Discute segregação socioespacial, povos tradicionais, diversidade cultural, direitos humanos e os efeitos das redes globais na organização social.",
      rota: "",
    },
    {
      id: 6,
      titulo: "💼Trabalho, Economia e Globalização",
      subTitulo: "Produção, consumo e circulação no mundo",
      resumo:
        "Analisa o papel do trabalho urbano e rural, agronegócio, fluxos de mercadorias, organismos internacionais e os desafios da economia globalizada.",
      rota: "",
    },
    {
      id: 7,
      titulo: "📊População e Dinâmica Demográfica",
      subTitulo: "Crescimento e mobilidade social",
      resumo:
        "Investiga crescimento populacional, migrações, juventude, envelhecimento, mobilidade e desigualdades sociais no Brasil e no mundo.",
      rota: "",
    },
  ];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>GEOGRAFIA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos &&
            assuntos.slice(0, 4).map((item, index) => (
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
          {assuntos.slice(4).map((item, index) => (
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

export { Geografia };
