import { Link } from "react-router-dom";
import style from "./Quimica.module.css";

const Quimica = () => {
   const assuntos = [
  {
    id: 1,
    titulo: "🔥 Termoquímica",
    subTitulo: "Energia nas reações químicas",
    resumo: "Estudo da entalpia, variação de energia, poder calorífico, combustão e eficiência energética de combustíveis.",
    rota: "/materias/quimica/",
  },
  {
    id: 2,
    titulo: "🧪 Estrutura da Matéria",
    subTitulo: "Modelos atômicos e constituição",
    resumo: "Evolução dos modelos atômicos, símbolos, número e massa atômica, elementos e substâncias químicas.",
    rota: "/materias/quimica/",
  },
  {
    id: 3,
    titulo: "📊 Conservação de Massa e Energia",
    subTitulo: "Leis fundamentais da Química",
    resumo: "Leis de conservação, relações entre mol, massas e partículas, equações químicas e balanço energético.",
    rota: "/materias/quimica/",
  },
  {
    id: 4,
    titulo: "⚡ Eletroquímica",
    subTitulo: "Corrente elétrica e reações",
    resumo: "Pilhas, baterias, eletrólise e processos de galvanoplastia, com foco em impactos ambientais e descarte de resíduos.",
    rota: "/materias/quimica/",
  },
  {
    id: 5,
    titulo: "🌍 Química Ambiental",
    subTitulo: "Impactos e soluções sustentáveis",
    resumo: "Poluentes do ar, água e solo, tratamento de resíduos, reciclagem, descarte consciente e mudanças climáticas.",
    rota: "/materias/quimica/",
  },
  {
    id: 6,
    titulo: "🔬 Ligações e Interações",
    subTitulo: "Forças químicas e biológicas",
    resumo: "Ligações químicas, forças intermoleculares e estrutura de aminoácidos, proteínas, DNA e RNA.",
    rota: "/materias/quimica/",
  },
  {
    id: 7,
    titulo: "⚖️ Equilíbrio e Cinética",
    subTitulo: "Velocidade e condições das reações",
    resumo: "Rapidez das reações, fatores que influenciam e equilíbrio químico em sistemas naturais e industriais.",
    rota: "/materias/quimica/",
  },
  {
    id: 8,
    titulo: "🧬 Compostos Orgânicos",
    subTitulo: "Estruturas e funções",
    resumo: "Funções orgânicas, propriedades, importância para a saúde humana, proteínas, carboidratos, lipídios e vitaminas.",
    rota: "/materias/quimica/",
  },
  {
    id: 9,
    titulo: "🌱 Energia e Sustentabilidade",
    subTitulo: "Recursos renováveis e não renováveis",
    resumo: "Biocombustíveis, biogás, etanol e comparação com combustíveis fósseis, destacando impactos e alternativas.",
    rota: "/materias/quimica/",
  },
  {
    id: 10,
    titulo: "🏭 Processos Industriais",
    subTitulo: "Produção e aplicações químicas",
    resumo: "Produção e uso de ferro-gusa, alumínio, aço, soda cáustica, polímeros, amônia e compostos químicos no cotidiano.",
    rota: "/materias/quimica/",
  },
  {
    id: 11,
    titulo: "🧴 Plásticos e Polímeros",
    subTitulo: "Materiais do cotidiano",
    resumo: "Estrutura e propriedades de polímeros, plásticos e seu impacto ambiental e social.",
    rota: "/materias/quimica/",
  },
  {
    id: 12,
    titulo: "🍎 Química dos Alimentos",
    subTitulo: "Nutrição e saúde",
    resumo: "Composição química dos alimentos, importância de proteínas, lipídios, carboidratos e vitaminas para o corpo.",
    rota: "/materias/quimica/",
  },
  {
    id: 13,
    titulo: "🌐 Ciclos Químicos e Poluição",
    subTitulo: "Fluxo de substâncias na biosfera",
    resumo: "Ciclos biogeoquímicos, toxicidade, tempo de permanência de poluentes e efeitos na saúde e no ambiente.",
    rota: "/materias/quimica/",
  },
  {
    id: 14,
    titulo: "📖 Linguagem Científica",
    subTitulo: "Leitura e interpretação",
    resumo: "Uso de gráficos, tabelas, dados estatísticos, artigos científicos e divulgação científica em diferentes mídias.",
    rota: "/materias/quimica/",
  },
  {
    id: 15,
    titulo: "🔎 Investigação Científica",
    subTitulo: "Método e prática experimental",
    resumo: "Definição de problema, hipóteses, experimentação, análise de dados e apresentação de conclusões.",
    rota: "/materias/quimica/",
  },
  {
    id: 16,
    titulo: "⚠️ Ética e Segurança",
    subTitulo: "Responsabilidade no uso da Química",
    resumo: "Ética científica, EPIs, descarte adequado, prevenção de acidentes e impactos do mau uso de reações químicas.",
    rota: "/materias/quimica/",
  },
];

    return(
        <div className={style.pag}>
      <div className={style.titulo}>
        <h1>QUIMICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {assuntos &&
            assuntos.slice(0, 12).map((assunto) => (
              <div key={assunto.id} className={style.vestibularCard}>
                <h3>{assunto.titulo}</h3>
                <h4>{assunto.subTitulo}</h4>
                <p>{assunto.resumo}</p>
                <button className={style.btn}>
                  <Link to={`/materias/cienciasNatureza/quimica/${assunto.id}`} state={{assunto}} > Estudar </Link>
                </button>
              </div>
            ))}
            </div>
      </section>
    </div>
    );
};

export { Quimica };