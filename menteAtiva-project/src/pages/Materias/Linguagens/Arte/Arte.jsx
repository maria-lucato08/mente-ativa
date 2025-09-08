import { Link } from "react-router-dom";
import style from "./Arte.module.css";

const Arte = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "🎭 Elementos da Linguagem",
      subTitulo: "Os códigos da arte.",
      resumo:
        "Estuda como as linguagens artísticas se estruturam como sistemas de signos e símbolos.",
      conteudoPage:
        "Inclui artes visuais, música, teatro e dança. Produção da linguagem da arte da pintura rupestre à contemporaneidade. Processos técnicos, formais e temáticos nos movimentos e estilos artísticos.",
    },
    {
      id: 2,
      titulo: "🖌️ Materialidades",
      subTitulo: "A matéria da arte.",
      resumo:
        "Abrange materiais, técnicas e suportes usados na produção artística.",
      conteudoPage:
        "Práticas manuais, uso de suportes tecnológicos e digitais, experimentação e descobertas nas linguagens artísticas. O material em si tem significado enquanto obra.",
    },
    {
      id: 3,
      titulo: "🌍 Mediação Cultural",
      subTitulo: "Arte e sociedade.",
      resumo:
        "Analisa as relações entre a produção artística e o contexto histórico, social e político.",
      conteudoPage:
        "Inclui influências de novas tecnologias, aspectos de gênero, ética, consumo, ideologias, trajetórias pessoais/profissionais, outras áreas do conhecimento e papel dos espaços culturais e artísticos.",
    },
    {
      id: 4,
      titulo: "💡 Processos de Criação",
      subTitulo: "Como nasce a arte.",
      resumo:
        "Estuda as etapas, ferramentas e técnicas do processo criativo artístico.",
      conteudoPage:
        "Inclui etapas do processo criativo, mitos e verdades sobre a criação e a importância da prática como construção contínua.",
    },
    {
      id: 5,
      titulo: "🏛️ Patrimônio Cultural",
      subTitulo: "Memória e preservação.",
      resumo:
        "Refere-se ao conjunto de bens culturais que representam a identidade de um povo.",
      conteudoPage:
        "Abrange patrimônio artístico, histórico e cultural; bens materiais e imateriais; tombamento; memória e preservação; espaços de conservação e apreciação da arte.",
    },
    {
      id: 6,
      titulo: "🎶 Saberes Estéticos e Culturais",
      subTitulo: "Arte, cultura e identidade.",
      resumo:
        "Explora a dimensão estética da arte e diferentes concepções de cultura.",
      conteudoPage:
        "Dimensão estética: imagem, corpo, tempo e espaço. Cultura erudita, popular e de massa. Produção artística e cultural brasileiras com influências portuguesa, africana, indígena e imigrante.",
    },
  ];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>MATEMATICA</h1>
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
                  to={`/materias/linguagens/arte/${assunto.id}`}
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
                  to={`/materias/linguagens/arte/${assunto.id}`}
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

export { Arte };
