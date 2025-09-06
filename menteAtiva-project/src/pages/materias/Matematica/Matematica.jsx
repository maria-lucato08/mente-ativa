import { Link } from "react-router-dom";
import style from "./Matematica.module.css";

const Matematica = () => {
  const assuntos = [
    {
      id: 1,
      titulo: "🔢Progressões",
      subTitulo:
        "Sequências numéricas com regra fixa — aritmética ou geométrica.",
      resumo:
        "Estuda sequências com diferença ou razão constante, usadas em cálculos de crescimento e soma de termos.",
      conteudoPage:
        "PA: a_n = a1 + (n-1)d; Sn = n(a1+an)/2. PG: a_n = a1*r^(n-1); Sn = a1(r^n-1)/(r-1).",
    },
    {
      id: 2,
      titulo: "📊Funções",
      subTitulo: "Relação entre variáveis.",
      resumo:
        "Mostram como uma variável depende da outra. Incluem funções de 1º e 2º grau, compostas, inversas, exponenciais e logarítmicas.",
      conteudoPage:
        "Tipos: afins, lineares, constantes, identidade, composta, inversa, modular, exponencial e logarítmica.",
    },
    {
      id: 3,
      titulo: "🎲Probabilidade",
      subTitulo: "Estudo das chances de eventos.",
      resumo: "Analisa a chance de acontecimentos em experimentos aleatórios.",
      conteudoPage:
        "Espaços amostrais, probabilidade simples e condicional, eventos equiprováveis e não equiprováveis.",
    },
    {
      id: 4,
      titulo: "🔠Contagem e Combinatória",
      subTitulo: "Métodos de contagem.",
      resumo:
        "Usa princípios matemáticos para calcular possibilidades em diferentes situações.",
      conteudoPage:
        "Princípio multiplicativo e aditivo, fatorial, arranjos, permutações, combinações e binômio de Newton.",
    },
    {
      id: 5,
      titulo: "📈Estatística",
      subTitulo: "Coleta e interpretação de dados.",
      resumo:
        "Organiza e interpreta dados, verificando padrões e confiabilidade.",
      conteudoPage:
        "Pesquisa, organização de dados, gráficos (histograma, polígonos, caixa, ramos e folhas), IDH.",
    },
    {
      id: 6,
      titulo: "📉Medidas Estatísticas",
      subTitulo: "Resumo numérico dos dados.",
      resumo: "Mostram tendência central e dispersão em conjuntos de dados.",
      conteudoPage:
        "Média, moda, mediana (tendência central). Amplitude, variância e desvio-padrão (dispersão).",
    },
    {
      id: 7,
      titulo: "💰Matemática Financeira",
      subTitulo: "Aplicações práticas em finanças.",
      resumo: "Calcula juros e porcentagens no dia a dia.",
      conteudoPage:
        "Porcentagem, juros simples (J = C.i.t), juros compostos (M = C(1+i)^t).",
    },
    {
      id: 8,
      titulo: "📐Medidas e Grandezas",
      subTitulo: "Sistemas e conversões.",
      resumo:
        "Trata de sistemas de medida, notação científica e grandezas derivadas.",
      conteudoPage:
        "SI, bases decimal/binária/sexagesimal, arredondamento, erro de medição, grandezas como velocidade e densidade.",
    },
    {
      id: 9,
      titulo: "📏Proporcionalidade",
      subTitulo: "Relações entre segmentos e figuras.",
      resumo: "Resolve problemas envolvendo semelhança e razões.",
      conteudoPage:
        "Segmentos de reta, Teorema de Tales e Teorema da Bissetriz.",
    },
    {
      id: 10,
      titulo: "🔄Geometria das Transformações",
      subTitulo: "Movimentos no plano.",
      resumo: "Estuda mudanças de posição ou forma em figuras.",
      conteudoPage:
        "Isometrias: reflexão, translação e rotação. Homotetia: ampliação/redução. Fractais.",
    },
    {
      id: 11,
      titulo: "🔺Figuras Planas",
      subTitulo: "Propriedades dos polígonos.",
      resumo: "Analisa polígonos, congruência, semelhança e áreas.",
      conteudoPage:
        "Área e perímetro, ladrilhamento, triângulos semelhantes e congruentes.",
    },
    {
      id: 12,
      titulo: "📐Trigonometria",
      subTitulo: "Relações entre lados e ângulos.",
      resumo:
        "Usa seno, cosseno e tangente para resolver problemas geométricos.",
      conteudoPage:
        "Razões trigonométricas, círculo trigonométrico, leis dos senos e cossenos, funções trigonométricas.",
    },
    {
      id: 13,
      titulo: "📦Geometria Espacial",
      subTitulo: "Estudo dos sólidos.",
      resumo: "Analisa formas tridimensionais e seus cálculos.",
      conteudoPage:
        "Prismas, pirâmides, cilindros, cones e esfera; área e volume; projeções e cartografia.",
    },
    {
      id: 14,
      titulo: "🧮Geometria Analítica",
      subTitulo: "Geometria no plano cartesiano.",
      resumo:
        "Une álgebra e geometria para representar pontos, retas e circunferências.",
      conteudoPage:
        "Equações da reta (paralelismo e perpendicularidade), ponto e reta, equação da circunferência.",
    },
  ];

  return (
     <div className={style.pag}>
      <div className={style.titulo}>
        <h1>MATEMATICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          {
            assuntos.slice(0, 12).map((assunto) => (
              <div key={assunto.id} className={style.vestibularCard}>
                <h3>{assunto.titulo}</h3>
                <h4>{assunto.subTitulo}</h4>
                <p>{assunto.resumo}</p>
                <button className={style.btn}>
                  <Link to={`/materias/matematica/${assunto.id}`} state={{assunto}}> Estudar </Link>
                </button>
              </div>
            ))}
        </div>
        <div className={style.ultimosCards}>
          {assuntos.slice(12).map((assunto) => (
            <div key={assunto.id } className={style.vestibularCard}>
              <h3>{assunto.titulo}</h3>
              <h4>{assunto.subTitulo}</h4>
              <p>{assunto.resumo}</p>
              <button className={style.btn}>
                <Link to={`/materias/matematica/${assunto.id}`} state={{assunto}}> Estudar </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Matematica };
