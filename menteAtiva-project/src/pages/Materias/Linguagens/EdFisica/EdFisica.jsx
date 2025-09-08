import { Link } from "react-router-dom";
import style from "./EdFisica.module.css";

const EdFisica = () => {
  const assuntos = [
  {
    id: 1,
    titulo: "🎲 Brincadeiras e Jogos",
    subTitulo: "Diversão, regras e cultura.",
    resumo: "Explora brincadeiras e jogos em suas diferentes formas, do popular ao digital.",
    conteudoPage: "Classificação de brincadeiras (populares, livres, dirigidas) e jogos (competitivos, cooperativos, recreativos, RPG, eletrônicos). Jogos e brincadeiras como fenômenos socioculturais. E-Sports e princípios cooperativos: inclusão, coletividade e igualdade."
  },
  {
    id: 2,
    titulo: "⚽ Esporte",
    subTitulo: "Prática, regras e sociedade.",
    resumo: "Analisa modalidades esportivas, classificações e sua influência social.",
    conteudoPage: "Classificação: técnico-combinatório, combate, invasão, rede/parede, campo e taco, marca e precisão, paralímpicos e alternativos. Sistema tático, arbitragem, ferramentas digitais. Espaços públicos e privados para prática. Influência das mídias, preconceito, violência e o esporte enquanto espetáculo. Organização de eventos."
  },
  {
    id: 3,
    titulo: "💃 Dança",
    subTitulo: "Expressão corporal e cultura.",
    resumo: "Estuda formas, finalidades e significados da dança na sociedade.",
    conteudoPage: "Classificação: origem, propósito, solo, dupla, grupo. Expressões: popular, clássica, erudita, de salão, urbana, contemporânea. Relação da dança com fenômenos socioculturais, cultura jovem, práticas no Brasil e no mundo."
  },
  {
    id: 4,
    titulo: "🤸 Ginástica",
    subTitulo: "Modalidades e saúde.",
    resumo: "Compreende práticas competitivas e não competitivas da ginástica.",
    conteudoPage: "Modalidades competitivas: acrobática, aeróbica, artística, rítmica e trampolim. Modalidades não competitivas: contorcionismo, cerebral, laboral, localizada, hidroginástica. Ginástica de condicionamento físico: conscientização corporal e saúde. Uso de recursos tecnológicos na prática."
  },
  {
    id: 5,
    titulo: "🥋 Luta",
    subTitulo: "Combate e expressão.",
    resumo: "Investiga as lutas como prática corporal, esporte e espetáculo.",
    conteudoPage: "Lutas no Brasil e no mundo. Organização de eventos e competições. Influência das mídias. Classificação: número de lutadores, previsibilidade, ação motora, distância, surgimento histórico, tipo de contato. Aspectos técnicos, táticos e filosóficos. Arbitragem com linguagem de sinais."
  },
  {
    id: 6,
    titulo: "🧗 Práticas Corporais de Aventura",
    subTitulo: "Aventura e meio ambiente.",
    resumo: "Estuda práticas corporais em ambientes urbanos e naturais.",
    conteudoPage: "Classificação: locais urbanos e natureza. Aspectos sociais e culturais da prática. Preservação e conservação do patrimônio natural. Relação com contextos sociais e ambientais."
  },
  {
    id: 7,
    titulo: "💪 Corpo, Movimento e Saúde",
    subTitulo: "Qualidade de vida e bem-estar.",
    resumo: "Relaciona o movimento corporal aos efeitos fisiológicos, sociais e culturais.",
    conteudoPage: "Benefícios das atividades físicas, demandas energéticas e hábitos alimentares. Capacidades físicas e habilidades motoras. Atividade física x qualidade de vida. Efeitos fisiológicos, morfológicos e psicossociais. Cultura corporal, padrões de beleza e discursos sobre o corpo. Fatores de risco: sedentarismo, alimentação inadequada, drogas, álcool, estresse, doenças hipocinéticas. Atividade física no cotidiano, planejamento individual e coletivo. Investigação científica: fisiologia do movimento."
  }
];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>EDUCAÇÃO FÍSICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos.slice(0, 4).map((assunto) => (
            <div key={assunto.id} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link
                  to={`/materias/linguagens/edFisica/${assunto.id}`}
                  state={{ assunto }}
                >
                  Estudar
                </Link>
              </button>
            </div>
          ))}
        </div>
        <div className={style.ultimosCards}>
          {assuntos.slice(4).map((assunto) => (
            <div key={assunto.id} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link
                  to={`/materias/linguagens/edFisica/${assunto.id}`}
                  state={{ assunto }}
                >
                  Estudar
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { EdFisica };
