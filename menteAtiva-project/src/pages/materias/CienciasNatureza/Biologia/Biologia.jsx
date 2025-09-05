import { Link } from "react-router-dom";
import style from "./Biologia.module.css";

const Biologia = () => {
    const assuntos = [
  {
    id: 1,
    titulo: "🔄 Matéria e energia nos ecossistemas",
    subTitulo: "Fluxo e equilíbrio ecológico",
    resumo: "Fluxo de matéria e energia em cadeias e teias alimentares, equilíbrio do ecossistema, bioacumulação trófica e descarte de resíduos.",
    rota: "/materias/biologia/",
  },
  {
    id: 2,
    titulo: "🌱 Ciclos biogeoquímicos",
    subTitulo: "Natureza e ação humana",
    resumo: "Ciclos naturais e interferência humana, com ações mitigatórias como reflorestamento e manejo sustentável.",
    rota: "/materias/biologia/",
  },
  {
    id: 3,
    titulo: "⚡ Fontes de energia",
    subTitulo: "Renováveis e não renováveis",
    resumo: "Comparação entre energias renováveis (solar, eólica, biomassa) e combustíveis fósseis e seus impactos ambientais.",
    rota: "/materias/biologia/",
  },
  {
    id: 4,
    titulo: "🧬 Diversidade da vida",
    subTitulo: "Classificação e metabolismo",
    resumo: "Sistemática, cladística, classificação dos organismos, fotossíntese e respiração celular.",
    rota: "/materias/biologia/",
  },
  {
    id: 5,
    titulo: "🌍 Problemas ambientais",
    subTitulo: "Ação antrópica e impactos",
    resumo: "Efeito estufa, mudanças climáticas, poluição, desmatamento, mineração e proteção da biodiversidade.",
    rota: "/materias/biologia/",
  },
  {
    id: 6,
    titulo: "🌌 Origem e evolução da vida",
    subTitulo: "Teorias e processos evolutivos",
    resumo: "Teorias sobre a origem da vida, evolução biológica, árvores filogenéticas, darwinismo social e conceito de espécie.",
    rota: "/materias/biologia/",
  },
  {
    id: 7,
    titulo: "🔬 Citologia",
    subTitulo: "Estrutura e tipos celulares",
    resumo: "Níveis de organização celular: tipo, número e complexidade das células nos organismos vivos.",
    rota: "/materias/biologia/",
  },
  {
    id: 8,
    titulo: "🐾 Fisiologia animal comparada",
    subTitulo: "Sistemas fisiológicos",
    resumo: "Comparação dos sistemas fisiológicos nas diferentes formas de vida animal.",
    rota: "/materias/biologia/",
  },
  {
    id: 9,
    titulo: "🧪 Genética e Biotecnologia",
    subTitulo: "Leis de Mendel e aplicações",
    resumo: "Leis de Mendel, polialelia (ABO), biotecnologia, clonagem, transgênicos, terapias gênicas e bioética.",
    rota: "/materias/biologia/",
  },
  {
    id: 10,
    titulo: "📊 Populações e variabilidade",
    subTitulo: "Natalidade, mortalidade e genética",
    resumo: "Densidade populacional, expectativa de vida e variabilidade gênica como fator de diversidade.",
    rota: "/materias/biologia/",
  },
  {
    id: 11,
    titulo: "🩺 Saúde e bem-estar",
    subTitulo: "Indivíduo e coletividade",
    resumo: "Saúde humana em diálogo com ISTs, gravidez na adolescência, alimentação, drogas, saneamento e vacinação.",
    rota: "/materias/biologia/",
  },
  {
    id: 12,
    titulo: "⚖️ Bioética e genética",
    subTitulo: "Proteção da diversidade",
    resumo: "Questões éticas ligadas à biotecnologia, preservação da variabilidade genética e impactos sociais.",
    rota: "/materias/biologia/",
  },
  {
    id: 13,
    titulo: "🔎 Investigação científica",
    subTitulo: "Métodos e práticas",
    resumo: "Etapas do método científico: hipóteses, experimentação, coleta de dados, análises e conclusões.",
    rota: "/materias/biologia/",
  },
  {
    id: 14,
    titulo: "📰 Divulgação científica",
    subTitulo: "Ciência e sociedade",
    resumo: "Formas de comunicação científica: feiras, olimpíadas, artigos, mídias, seminários e debates.",
    rota: "/materias/biologia/",
  },
  {
    id: 15,
    titulo: "📖 Linguagem científica",
    subTitulo: "Leitura e interpretação",
    resumo: "Interpretação de dados estatísticos, gráficos, tabelas, infográficos e textos de divulgação científica.",
    rota: "/materias/biologia/",
  },
];
    return(
        <div className={style.pag}>
      <div className={style.titulo}>
        <h1>BIOLOGIA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos &&
            assuntos.slice(0, 12).map((item, index) => (
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
          {assuntos.slice(12).map((item, index) => (
            <div key={index + 12} className={style.vestibularCard}>
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

export { Biologia };