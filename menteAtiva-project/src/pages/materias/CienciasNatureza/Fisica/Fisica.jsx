import { Link } from "react-router-dom";
import style from "./Fisica.module.css";

const Fisica = () => {
    const assuntos = [
  {
    id: 1,
    titulo: "⚛️ Quantização da energia",
    subTitulo: "Modelo atômico e dualidade",
    resumo: "Modelo de Bohr e dualidade onda-partícula, base da física quântica.",
    rota: "/materias/fisica/",
  },
  {
    id: 2,
    titulo: "📡 Ondas eletromagnéticas",
    subTitulo: "Do rádio aos raios gama",
    resumo: "Espectro eletromagnético: rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X e gama.",
    rota: "/materias/fisica/",
  },
  {
    id: 3,
    titulo: "⚡ Eletrostática e eletrodinâmica",
    subTitulo: "Forças e circuitos elétricos",
    resumo: "Lei de Coulomb, campos elétrico e magnético, leis de Ohm, capacitores, geradores e circuitos elétricos.",
    rota: "/materias/fisica/",
  },
  {
    id: 4,
    titulo: "🧲 Magnetismo",
    subTitulo: "Campos e aplicações",
    resumo: "Campo magnético, bússola, eletroímã e relação com correntes elétricas.",
    rota: "/materias/fisica/",
  },
  {
    id: 5,
    titulo: "🔋 Conservação de energia",
    subTitulo: "Mecânica e trabalho",
    resumo: "Trabalho, potência, energia cinética, energia potencial gravitacional e elástica.",
    rota: "/materias/fisica/",
  },
  {
    id: 6,
    titulo: "🔥 Calorimetria",
    subTitulo: "Transferência de calor",
    resumo: "Quantidade de calor, calor sensível e latente, calor específico e processos de condução, convecção e radiação.",
    rota: "/materias/fisica/",
  },
  {
    id: 7,
    titulo: "🌌 Radiação e espectroscopia",
    subTitulo: "Energia e matéria no universo",
    resumo: "Espectro de emissão e absorção, radiação ionizante, fissão, fusão nuclear e partículas elementares.",
    rota: "/materias/fisica/",
  },
  {
    id: 8,
    titulo: "🪐 Astronomia e cosmologia",
    subTitulo: "Do Sistema Solar ao Big Bang",
    resumo: "Estrelas, planetas, leis de Kepler, gravitação universal, expansão do universo e relatividade geral.",
    rota: "/materias/fisica/",
  },
  {
    id: 9,
    titulo: "🏃 Cinemática e dinâmica",
    subTitulo: "Movimento e forças",
    resumo: "Movimentos retilíneos e circulares, leis de Newton, forças, atrito, impulso e lançamentos.",
    rota: "/materias/fisica/",
  },
  {
    id: 10,
    titulo: "⚖️ Estática e hidrostática",
    subTitulo: "Equilíbrio e fluidos",
    resumo: "Centro de massa, torque, pressão, princípio de Pascal, lei de Stevin e empuxo de Arquimedes.",
    rota: "/materias/fisica/",
  },
  {
    id: 11,
    titulo: "🔭 Óptica e visão",
    subTitulo: "Luz e instrumentos ópticos",
    resumo: "Reflexão, refração, lentes, espelhos, espectro visível, sombra, penumbra e aplicações na visão.",
    rota: "/materias/fisica/",
  },
  {
    id: 12,
    titulo: "🎶 Ondas sonoras",
    subTitulo: "Som e vibrações",
    resumo: "Altura, timbre, intensidade, propagação, efeito Doppler e movimento harmônico.",
    rota: "/materias/fisica/",
  },
  {
    id: 13,
    titulo: "💻 Eletrônica e informática",
    subTitulo: "Circuitos e semicondutores",
    resumo: "Transistores, diodos, circuitos integrados e efeito fotoelétrico.",
    rota: "/materias/fisica/",
  },
  {
    id: 14,
    titulo: "⚙️ Termodinâmica",
    subTitulo: "Calor e máquinas térmicas",
    resumo: "Leis da Termodinâmica, ciclos, motores, rendimento, entropia e impacto ambiental.",
    rota: "/materias/fisica/",
  },
  {
    id: 15,
    titulo: "🌍 Energia e sociedade",
    subTitulo: "Usinas e sustentabilidade",
    resumo: "Hidrelétricas, termelétricas, eólicas, nucleares, energias alternativas e efeitos como aquecimento global.",
    rota: "/materias/fisica/",
  },
  {
    id: 16,
    titulo: "🔬 Investigação científica",
    subTitulo: "Método e comunicação",
    resumo: "Definição de problema, hipóteses, experimentação, análise de dados, divulgação e ética científica.",
    rota: "/materias/fisica/",
  },
];
    
    return(
         <div className={style.pag}>
      <div className={style.titulo}>
        <h1>FISICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos &&
            assuntos.map((item, index) => (
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
      </section>
    </div>
    );
};

export { Fisica };