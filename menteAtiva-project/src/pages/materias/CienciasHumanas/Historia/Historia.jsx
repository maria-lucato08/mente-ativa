import { Link } from "react-router-dom";
import style from "./Historia.module.css";

const Historia = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "🏛️Formação dos Estados e Revoluções",
      subTitulo: "Origem e consolidação dos Estados modernos",
      resumo:
        "Estudamos a formação dos Estados Nacionais na Europa e nos EUA, incluindo revoluções que moldaram os sistemas políticos e sociais",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 2,
      titulo: "🌍Migrações e Colonialismo",
      subTitulo: "Movimentos populacionais e expansão territorial",
      resumo:
        "Análise dos processos migratórios, conflitos territoriais e colonialismo europeu, considerando suas consequências políticas, sociais e culturais.",
      rota: "/materias/cienciasHumanas/",
    },
    {
      id: 3,
      titulo: "🔬Ciência, Política e Direitos Humanos",
      subTitulo: "Transformações sociais e civis",
      resumo:
        "Relação entre avanços científicos, seus usos políticos e sociais, e a trajetória da Declaração Universal dos Direitos Humanos.",
      rota: "",
    },
    {
      id: 4,
      titulo: "🛖Populações e Resistência Cultural",
      subTitulo: "Saberes e culturas tradicionais",
      resumo:
        "Compreensão das populações indígenas e afrodescendentes, seus modos de vida, resistência cultural e preservação de saberes.",
      rota: "",
    },
    {
      id: 5,
      titulo: "⚒️Trabalho e Sociedade",
      subTitulo: "Estrutura social e modos de produção",
      resumo:
        "Estudo dos diferentes tipos de trabalho, estratificação social e impactos econômicos em diferentes períodos históricos e sociedades.",
      rota: "",
    },
    {
      id: 6,
      titulo: "💰Economia e Industrialização",
      subTitulo: "Transformações econômicas e tecnológicas",
      resumo:
        "Evolução da economia, industrialização e políticas econômicas globais, destacando a Segunda Revolução Industrial e a economia contemporânea.",
      rota: "",
    },
    {
      id: 7,
      titulo: "🏺Civilizações e Períodos Históricos",
      subTitulo: "Origens e legados das sociedades antigas",
      resumo:
        "Análise de civilizações antigas (Mesopotâmia, Egito, Grécia, Roma) e povos indígenas, bem como os períodos históricos que moldaram sociedades.",
      rota: "",
    },
    {
      id: 8,
      titulo: "🗳️Revoluções e Pensamento Político",
      subTitulo: "Ideias e mudanças sociais",
      resumo:
        "Impactos do Iluminismo, Imperialismo, Neocolonialismo e revoluções (Mexicana e Russa) sobre as sociedades e a organização política.",
      rota: "",
    },
    {
      id: 9,
      titulo: "💹Capitalismo e Revolução Industrial",
      subTitulo: "Economia e tecnologia em transformação",
      resumo:
        "Evolução do capitalismo, comércio, industrialização e Segunda Revolução Industrial, com reflexos sociais e econômicos no mundo.",
      rota: "",
    },
    {
      id: 10,
      titulo: "🌱Economia Global e Meio Ambiente",
      subTitulo: "Sustentabilidade e desenvolvimento",
      resumo:
        "Relação entre economia global, agronegócio, industrialização e impactos socioambientais, considerando políticas internacionais e sustentabilidade.",
      rota: "",
    },
    {
      id: 11,
      titulo: "✊Resistência e Regimes Autoritários",
      subTitulo: "Lutas sociais e repressão",
      resumo:
        "Resistência de populações indígenas e afrodescendentes frente a regimes autoritários, totalitários e sistemas opressores ao longo da história.",
      rota: "",
    },
    {
      id: 12,
      titulo: "🏛️Democracia e Direitos Humanos",
      subTitulo: "Construção e proteção de direitos",
      resumo:
        "Movimentos democráticos, construção da cidadania e o papel da Declaração Universal dos Direitos Humanos na história global.",
      rota: "",
    },

    {
      id: 13,
      titulo: "🌐Organismos e Blocos Internacionais",
      subTitulo: "Economia, política e interconexões",
      resumo:
        "Função de organismos internacionais (Banco Mundial, ...) e blocos políticos e econômicos na organização e regulação do mundo contemporâneo.",
      rota: "",
    },

    {
      id: 14,
      titulo: "🏗️Globalização e Governança",
      subTitulo: "Construção e proteção de direitos",
      resumo:
        "Impactos da globalização, protecionismo, multilateralismo e governança internacional nas sociedades e economias atuais.",
      rota: "",
    },

    {
      id: 15,
      titulo: "🏰Patrimônio e Movimentos Culturais",
      subTitulo: "Memória e inovação cultural",
      resumo:
        "Valorização do patrimônio histórico e cultural, incluindo vanguardas artísticas e a preservação da memória histórica.",
      rota: "",
    },

    {
      id: 16,
      titulo: "🎭Cultura Contemporânea e Eventos",
      subTitulo: "Expressões culturais atuais",
      resumo:
        "Produções culturais contemporâneas, eventos artísticos e manifestações digitais como forma de circulação, apropriação e expressão cultural.",
      rota: "",
    },
  ];
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>HISTÓRIA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos.map((assunto) => (
            <div key={assunto} className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link
                  to={`/materias/cienciasHumanas/historia/${assunto.id}`}
                  state={{ assunto }}
                >
                  {" "}
                  Conferir agora
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Historia };
