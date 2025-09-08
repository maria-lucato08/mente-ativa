import { Link } from "react-router-dom";
import style from "./ingles.module.css";

const Ingles = () => {
  const assuntos = [
  {
    id: 1,
    titulo: "🎧 Escuta Ativa",
    subTitulo: "Atentar e compreender.",
    resumo: "Foco na atenção, tomada de nota e compreensão de textos orais.",
    conteudoPage: "Escuta atenta, turno e tempo de fala. Estratégias de leitura prévia e estabelecimento de hipóteses. Atenção às informações específicas."
  },
  {
    id: 2,
    titulo: "🗣️ Speaking",
    subTitulo: "Produção oral eficiente.",
    resumo: "Aprender a falar com clareza, respeitando entonação, pausas e stress.",
    conteudoPage: "Identificação de características da linguagem falada. Planejamento, produção e edição de textos orais. Gêneros orais: narrar, relatar, expor, argumentar e descrever ações em diferentes plataformas."
  },
  {
    id: 3,
    titulo: "🔊 Efeitos Sonoros e Sentido",
    subTitulo: "Como a voz transmite significado.",
    resumo: "Uso de volume, timbre, pausas, ritmo e outros recursos sonoros na oralidade.",
    conteudoPage: "Observação da entonação e pontuação (stress). Combinação de recursos sonoros com linguísticos e multissemióticos para gerar efeitos de sentido."
  },
  {
    id: 4,
    titulo: "📖 Leitura Crítica",
    subTitulo: "Interpretar textos com atenção.",
    resumo: "Distingue fatos e opiniões, identifica pontos de vista e intertextualidade.",
    conteudoPage: "Compreensão de textos escritos e multissemióticos. Identificação de ideias favoráveis ou contrárias, modificadores de substantivos, verbos e adjetivos. Observação da função da pontuação e intertextualidade."
  },
  {
    id: 5,
    titulo: "✍️ Produção de Textos",
    subTitulo: "Escrever com propósito.",
    resumo: "Planejamento e escrita de textos narrativos, expositivos, argumentativos e descritivos.",
    conteudoPage: "Gêneros escritos para diferentes plataformas, incluindo mídias sociais. Uso de recursos multissemióticos, organização e curadoria de informações, contextualização e publicação."
  },
  {
    id: 6,
    titulo: "📑 Procedimentos de Estudo",
    subTitulo: "Técnicas para leitura e escrita.",
    resumo: "Organização e estratégias de estudo para maximizar a compreensão.",
    conteudoPage: "Grifar, anotar, resumir, identificar palavras-chave e ideias principais. Uso de cognatos, imagens, símbolos e pesquisa em dicionários. Compreensão geral (skimming) e específica (scanning)."
  },
  {
    id: 7,
    titulo: "🔤 Vocabulário Técnico",
    subTitulo: "Dicionários e glossários.",
    resumo: "Aprender e utilizar vocabulário específico e terminologia científica.",
    conteudoPage: "Dicionários bilíngues, glossários, sinônimos, antônimos, siglas, abreviações e acrônimos."
  },
  {
    id: 8,
    titulo: "📚 Estruturas Linguísticas",
    subTitulo: "Morfossintaxe e semântica.",
    resumo: "Entender a formação de palavras e o uso correto de estruturas gramaticais.",
    conteudoPage: "Formação de palavras, empréstimos linguísticos, modificadores de substantivos, verbos e adjetivos. Estruturas morfossintáticas e semânticas para análise de textos."
  },
  {
    id: 9,
    titulo: "🌎 Cultura e Língua",
    subTitulo: "Diversidade e costumes.",
    resumo: "Aprender sobre os países de língua inglesa e sua relação com a língua.",
    conteudoPage: "Cultura e tradições, festas, músicas, danças, comidas típicas, datas comemorativas, procedimentos de viagem (passaporte, vistos, moedas, alfândega, fusos horários). Influência da língua inglesa na arte e cultura."
  },
  {
    id: 10,
    titulo: "📝 Interação e Variação Linguística",
    subTitulo: "Como a língua muda conforme contexto.",
    resumo: "Estuda variações de gênero textual, práticas artísticas e linguísticas formais e informais.",
    conteudoPage: "Operadores lógico-discursivos, modalizadores, variação linguística, interação de gêneros textuais e contextos culturais."
  }
];
 
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>LÍNGUA INGLESA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos.slice(0, 8).map((assunto) => (
            <div key={assunto.id} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link
                  to={`/materias/linguagens/ingles/${assunto.id}`}
                  state={{ assunto }}
                >
                  Estudar
                </Link>
              </button>
            </div>
          ))}
        </div>
        <div className={style.ultimosCards}>
          {assuntos.slice(8).map((assunto) => (
            <div key={assunto.id} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link
                  to={`/materias/linguagens/ingles/${assunto.id}`}
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

export { Ingles };
