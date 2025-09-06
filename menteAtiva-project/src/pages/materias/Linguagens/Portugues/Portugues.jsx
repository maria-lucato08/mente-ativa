import { Link } from "react-router-dom";
import style from "./Portugues.module.css";

const Portugues = () => {
  const assuntos = [
  {
    id: 1,
    titulo: "🗣️ Oralidade e Comunicação",
    subTitulo: "Debate, escuta e expressão oral",
    resumo: "Trabalha escuta atenta, debates, apresentações e o uso de recursos multissemióticos em contextos sociais.",
    conteudoPage: "Inclui planejamento da fala, turnos de diálogo, entonação e stress, produção oral de gêneros como narrar, relatar, expor, argumentar e descrever, adaptados a diferentes contextos e plataformas digitais."
  },
  {
    id: 2,
    titulo: "📖 Interpretação e Leitura",
    subTitulo: "Compreensão crítica de textos",
    resumo: "Estratégias de leitura e compreensão de textos diversos com análise de sentidos e intenções.",
    conteudoPage: "Abrange textos literários, jornalísticos, científicos e digitais, identificação de ideias principais, fatos e opiniões, intertextualidade, ironia e uso de sinais de pontuação para interpretação."
  },
  {
    id: 3,
    titulo: "✍️ Redação e Produção Textual",
    subTitulo: "Do planejamento à revisão",
    resumo: "Planejamento e escrita de textos em diferentes gêneros, uso de argumentação, coesão, ferramentas digitais e revisão.",
    conteudoPage: "Inclui elaboração de textos narrativos, expositivos, argumentativos e descritivos, organização de ideias, coesão e coerência, adaptação ao público e plataforma, revisão e edição."
  },
  {
    id: 4,
    titulo: "📚 Literatura e Cultura",
    subTitulo: "Obras, movimentos e contextos",
    resumo: "Estudo e apreciação da literatura brasileira, portuguesa, indígena, africana e latino-americana.",
    conteudoPage: "Análise de estilos, movimentos literários, contextos históricos e culturais, identificação de influências e diálogos entre autores e tradições artísticas."
  },
  {
    id: 5,
    titulo: "🔤 Gramática e Análise Linguística",
    subTitulo: "Norma, variação e efeitos de sentido",
    resumo: "Estudo da morfossintaxe, variação linguística, estilística, coesão, coerência e usos da norma-padrão.",
    conteudoPage: "Inclui análise de frases, estrutura de sentenças, funções sintáticas, pontuação, concordância, regência, variação linguística e efeitos de sentido em diferentes contextos de produção textual."
  },
  {
    id: 6,
    titulo: "📰 Textos Midiáticos e Digitais",
    subTitulo: "Jornalismo, publicidade e cultura digital",
    resumo: "Leitura, análise e produção de textos jornalísticos, publicitários, científicos e digitais.",
    conteudoPage: "Abrange fake news, podcasts, vlogs, fanfics, resenhas, estratégias de produção textual para mídias digitais e análise crítica de conteúdos midiáticos e culturais."
  },
  {
    id: 7,
    titulo: "🧠 Crítica e Argumentação",
    subTitulo: "Tese, evidências e contra-argumento",
    resumo: "Desenvolvimento do pensamento crítico, posicionamento responsável em debates, construção de teses e defesa de ideias.",
    conteudoPage: "Inclui refutação de argumentos, análise de evidências, uso de raciocínio lógico, construção de opiniões fundamentadas e produção de textos argumentativos claros e coerentes."
  }
];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>PORTUGUES</h1>
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
                  to={`/materias/linguagens/portugues/${assunto.id}`}
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
                  to={`/materias/linguagens/portugues/${assunto.id}`}
                  state={{ assunto }}
                >
                  {" "}
                  Estudar{" "}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Portugues };
