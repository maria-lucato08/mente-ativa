import { Link } from "react-router-dom";
import style from "./Sociologia.module.css";

const Sociologia = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "📜 Padrões e normas sociais",
      subTitulo: "Cultura, poder e trabalho",
      resumo:
        "Estudo das normas e padrões culturais, políticos e de trabalho em diferentes sociedades, incluindo influências históricas de racismo, etnocentrismo e evolucionismo.",
      rota: "/materias/sociologia/",
    },
    {
      id: 2,
      titulo: "⚖️ Discursos e contrapontos",
      subTitulo: "Ideologias históricas e modernas",
      resumo:
        "Exploração de ideias como eugenia, arianismo e colonialismo, e suas contrapartes modernas: relativismo cultural e multiculturalismo.",
      rota: "/materias/sociologia/",
    },
    {
      id: 3,
      titulo: "🌍 Minorias e diversidade",
      subTitulo: "Inclusão e aculturação",
      resumo:
        "Questões de negros, indígenas, imigrantes e refugiados no século XX; aculturação e assimilação em grupos sociais, mídias e memória cultural.",
      rota: "/materias/sociologia/",
    },
    {
      id: 4,
      titulo: "💡 Progresso e sociedade",
      subTitulo: "Tecnologia, trabalho e ambiente",
      resumo:
        "Impactos da tecnologia, do trabalho e do meio ambiente; formas de manipulação da informação: imparcial, tendenciosa ou ideológica.",
      rota: "/materias/sociologia/",
    },
    {
      id: 5,
      titulo: "🏛️ Sociedade moderna e estratificação",
      subTitulo: "Conflitos e hierarquias sociais",
      resumo:
        "Conflitos sociais e minoritários, espaços físicos e virtuais, e processos de aculturação em contextos locais, regionais, nacionais e globais.",
      rota: "/materias/sociologia/",
    },
    {
      id: 6,
      titulo: "📌 Territórios e fronteiras",
      subTitulo: "Política, legislação e cultura",
      resumo:
        "Relação entre espaço, política, legislação e cultura; sobreposição de territorialidades étnico-culturais e governança.",
      rota: "/materias/sociologia/",
    },
    {
      id: 7,
      titulo: "👩‍🎓 Juventude e espaços sociais",
      subTitulo: "Papel central e periférico",
      resumo:
        "Papel da juventude em contextos centrais e periféricos, físicos e digitais, culturais, profissionais e acadêmicos.",
      rota: "/materias/sociologia/",
    },
    {
      id: 8,
      titulo: "🤝 Grupos sociais e integração",
      subTitulo: "Ocupação e convivência",
      resumo:
        "Ocupação, domínio e integração socioespacial; relações entre grupos antagônicos na propriedade, economia, política e cultura.",
      rota: "/materias/sociologia/",
    },
    {
      id: 9,
      titulo: "🏙️ Conflitos urbanos e gentrificação",
      subTitulo: "Migração e xenofobia",
      resumo:
        "Migrações, xenofobia, conflitos territoriais e socioespaciais, com destaque para segurança e equilíbrio social.",
      rota: "/materias/sociologia/",
    },
    {
      id: 10,
      titulo: "🌐 Fluxos migratórios e proteção",
      subTitulo: "Estados e organismos internacionais",
      resumo:
        "Ações de Estados e organismos internacionais no protecionismo cultural e no uso das tecnologias digitais.",
      rota: "/materias/sociologia/",
    },
    {
      id: 11,
      titulo: "🌱 Sociedade e meio ambiente",
      subTitulo: "Sustentabilidade e cidadania",
      resumo:
        "Papel de indivíduos, instituições e Estados nas políticas públicas, consumo responsável e produção sustentável.",
      rota: "/materias/sociologia/",
    },
    {
      id: 12,
      titulo: "⚖️ Desigualdade e Direitos Humanos",
      subTitulo: "Pluralismo e combate à intolerância",
      resumo:
        "Combate à intolerância, pluralismo religioso, preconceito e desigualdades; novas concepções de cidadania global.",
      rota: "/materias/sociologia/",
    },
    {
      id: 13,
      titulo: "🔬 Transformações sociais e tecnológicas",
      subTitulo: "Ciência, tecnologia e cultura",
      resumo:
        "Influência da ciência, tecnologia, indústria cultural, capitalismo e padrões de consumo no comportamento e identidade cultural.",
      rota: "/materias/sociologia/",
    },
    {
      id: 14,
      titulo: "🕊️ Liberdade e violência",
      subTitulo: "Autonomia e conflitos",
      resumo:
        "Diferentes concepções de liberdade, determinismo, empreendedorismo, solidariedade e formas de violência: física, psicológica e simbólica.",
      rota: "/materias/sociologia/",
    },
    {
      id: 15,
      titulo: "✊ Movimentos sociais urbanos",
      subTitulo: "Inclusão e políticas públicas",
      resumo:
        "Inclusão de grupos marginalizados e políticas públicas redistributivas, ações afirmativas e cotas.",
      rota: "/materias/sociologia/",
    },
    {
      id: 16,
      titulo: "💼 Trabalho e mercado global",
      subTitulo: "Economia, mercado e relações laborais",
      resumo:
        "Relações de trabalho na sociedade globalizada: informalidade, flexibilização, terceirização, novas profissões e inserção da juventude.",
      rota: "/materias/sociologia/",
    },
    {
      id: 17,
      titulo: "🏛️ Organização política e tratados internacionais",
      subTitulo: "Estruturas do Estado e diplomacia",
      resumo:
        "Estruturas do Estado, formas de governo, regimes, sistemas de governo e tratados históricos como Vestfália e Viena.",
      rota: "/materias/sociologia/",
    },
    {
      id: 18,
      titulo: "🗳️ Cidadania e autoritarismo",
      subTitulo: "Instituições e participação",
      resumo:
        "Instituições político-partidárias, manifestações de cidadania e formas de autoritarismo na América Latina.",
      rota: "/materias/sociologia/",
    },
    {
      id: 19,
      titulo: "💹 Capitalismo e Revolução Industrial",
      subTitulo: "Economia e tecnologia em transformação",
      resumo:
        "Evolução do capitalismo, comércio, industrialização e Segunda Revolução Industrial, com reflexos sociais e econômicos no mundo.",
      rota: "/materias/sociologia/",
    },
    {
      id: 20,
      titulo: "💰 Economia e industrialização",
      subTitulo: "Transformações econômicas e tecnológicas",
      resumo:
        "Evolução da economia, industrialização e políticas econômicas globais, destacando a Segunda Revolução Industrial e a economia contemporânea.",
      rota: "/materias/sociologia/",
    },
    {
      id: 21,
      titulo: "🌱 Economia global e meio ambiente",
      subTitulo: "Sustentabilidade e desenvolvimento",
      resumo:
        "Relação entre economia global, agronegócio, industrialização e impactos socioambientais, considerando políticas internacionais e sustentabilidade.",
      rota: "/materias/sociologia/",
    },
    {
      id: 22,
      titulo: "🏰 Patrimônio e movimentos culturais",
      subTitulo: "Memória e inovação cultural",
      resumo:
        "Valorização do patrimônio histórico e cultural, incluindo vanguardas artísticas e a preservação da memória histórica.",
      rota: "/materias/sociologia/",
    },
  ];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>SOCIOLOGIA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos &&
            assuntos.slice(0, 20).map((assunto) => (
              <div key={assunto} className={style.vestibularCard}>
                <h3>{assunto.titulo}</h3>
                <h4>{assunto.subTitulo}</h4>
                <p>{assunto.resumo}</p>
                <button className={style.btn}>
                  <Link to={`/materias/cienciasHumanas/sociologia/${assunto.id}`} state={{assunto}}> Conferir agora</Link>
                </button>
              </div>
            ))}
        </div>
        <div className={style.ultimosCards}>
          {assuntos.slice(20).map((assunto) => (
            <div key={assunto.id} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link to={`/materias/cienciasHumanas/sociologia/${assunto.id}`} state={{assunto}}> Conferir agora</Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Sociologia };
