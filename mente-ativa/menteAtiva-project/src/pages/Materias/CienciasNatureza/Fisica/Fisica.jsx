import { Link } from "react-router-dom";
import style from "./Fisica.module.css";

const Fisica = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "⚛️Quantização da energia",
      subTitulo: "Modelo atômico e dualidade",
      resumo:
        "Modelo de Bohr e dualidade onda-partícula, base da física quântica.",
      conteudoPage: " A quantização da energia é um conceito fundamental na Física moderna que descreve como a energia não pode assumir valores arbitrários, mas sim valores discretos e específicos. Este princípio revolucionou a nossa compreensão do mundo microscópico e lançou as bases para o desenvolvimento da mecânica quântica, uma das áreas mais importantes da Física. A relevância da quantização da energia reside em suas aplicações práticas e teóricas que vão desde a explicação de fenômenos naturais até o desenvolvimento de tecnologias avançadas, como transistores e lasers. A quantização da energia é especialmente importante na explicação de fenômenos que ocorrem em escalas muito pequenas, tais como a emissão e absorção de  luz por átomos e moléculas. Esses processos são regidos por leis que só podem ser explicadas de maneira satisfatória através dos princípios da quantização. Além disso, muitas das tecnologias que usamos no dia a dia, como os dispositivos semicondutores e equipamentos médicos avançados, dependem diretamente dos conhecimentos adquiridos através do estudo da quantização da energia.",
    },
    {
      id: 2,
      titulo: "📡Ondas eletromagnéticas",
      subTitulo: "Do rádio aos raios gama",
      resumo:
        "Espectro eletromagnético: rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X e gama.",
      conteudoPage: "a",
    },
    {
      id: 3,
      titulo: "⚡Eletrostática e eletrodinâmica",
      subTitulo: "Forças e circuitos elétricos",
      resumo:
        "Lei de Coulomb, campos elétrico e magnético, leis de Ohm, capacitores, geradores e circuitos elétricos.",
      conteudoPage: "a",
    },
    {
      id: 4,
      titulo: "🧲Magnetismo",
      subTitulo: "Campos e aplicações",
      resumo:
        "Campo magnético, bússola, eletroímã e relação com correntes elétricas.",
      conteudoPage: "a",
    },
    {
      id: 5,
      titulo: "🔋Conservação de energia",
      subTitulo: "Mecânica e trabalho",
      resumo:
        "Trabalho, potência, energia cinética, energia potencial gravitacional e elástica.",
      conteudoPage: "a",
    },
    {
      id: 6,
      titulo: "🔥Calorimetria",
      subTitulo: "Transferência de calor",
      resumo:
        "Quantidade de calor, calor sensível e latente, calor específico e processos de condução, convecção e radiação.",
      conteudoPage: "a",
    },
    {
      id: 7,
      titulo: "🌌Radiação e espectroscopia",
      subTitulo: "Energia e matéria no universo",
      resumo:
        "Espectro de emissão e absorção, radiação ionizante, fissão, fusão nuclear e partículas elementares.",
      conteudoPage: "a",
    },
    {
      id: 8,
      titulo: "🪐Astronomia e cosmologia",
      subTitulo: "Do Sistema Solar ao Big Bang",
      resumo:
        "Estrelas, planetas, leis de Kepler, gravitação universal, expansão do universo e relatividade geral.",
      conteudoPage: "a",
    },
    {
      id: 9,
      titulo: "🏃Cinemática e dinâmica",
      subTitulo: "Movimento e forças",
      resumo:
        "Movimentos retilíneos e circulares, leis de Newton, forças, atrito, impulso e lançamentos.",
      conteudoPage: "a",
    },
    {
      id: 10,
      titulo: "⚖️Estática e hidrostática",
      subTitulo: "Equilíbrio e fluidos",
      resumo:
        "Centro de massa, torque, pressão, princípio de Pascal, lei de Stevin e empuxo de Arquimedes.",
      conteudoPage: "a",
    },
    {
      id: 11,
      titulo: "🔭Óptica e visão",
      subTitulo: "Luz e instrumentos ópticos",
      resumo:
        "Reflexão, refração, lentes, espelhos, espectro visível, sombra, penumbra e aplicações na visão.",
      conteudoPage: "a",
    },
    {
      id: 12,
      titulo: "🎶Ondas sonoras",
      subTitulo: "Som e vibrações",
      resumo:
        "Altura, timbre, intensidade, propagação, efeito Doppler e movimento harmônico.",
      conteudoPage: "a",
    },
    {
      id: 13,
      titulo: "💻Eletrônica e informática",
      subTitulo: "Circuitos e semicondutores",
      resumo:
        "Transistores, diodos, circuitos integrados e efeito fotoelétrico.",
      conteudoPage: "a",
    },
    {
      id: 14,
      titulo: "⚙️Termodinâmica",
      subTitulo: "Calor e máquinas térmicas",
      resumo:
        "Leis da Termodinâmica, ciclos, motores, rendimento, entropia e impacto ambiental.",
      conteudoPage: "a",
    },
    {
      id: 15,
      titulo: "🌍Energia e sociedade",
      subTitulo: "Usinas e sustentabilidade",
      resumo:
        "Hidrelétricas, termelétricas, eólicas, nucleares, energias alternativas e efeitos como aquecimento global.",
      conteudoPage: "a",
    },
    {
      
      id: 16,
      titulo: "🔬Investigação científica",
      subTitulo: "Método e comunicação",
      resumo:
        "Definição de problema, hipóteses, experimentação, análise de dados, divulgação e ética científica.",
      conteudoPage: "a",
    },
  ];

  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>FÍSICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos.map((assunto) => (
              <div key={assunto.id} className={style.vestibularCard}>
                <h3>{assunto.titulo}</h3>
                <h4>{assunto.subTitulo}</h4>
                <p>{assunto.resumo}</p>
                <button className={style.btn}>
                  <Link to={`/materias/cienciasNatureza/fisica/${assunto.id}`} state={{assunto}}> Estudar </Link>
                </button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export { Fisica };
