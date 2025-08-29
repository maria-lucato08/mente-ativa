import { Calculator, Atom, BookOpen, MessageCircle } from "lucide-react";
import Particles from "react-tsparticles";

import style from "./inicial.module.css";

const Inicial = () => {
  const comentarios = [
    { titulo: "Um elogio incrível", nome: "Nome", descricao: "Descrição" },
    { titulo: "Um feedback fantástico", nome: "Nome", descricao: "Descrição" },
    { titulo: "Uma avaliação positiva", nome: "Nome", descricao: "Descrição" },
  ];

  return (
    <div className={style.containerB}>
        {/* Fundo Ondas */}
        <div className={style.fundoOndas}>
          <div className={style.wave}></div>
          <div className={style.wave}></div>
        </div> 

      {/* Navbar */}
      <nav className={style.navbar}>
        <ul>
          <li>
            <a href="#">
              <Calculator size={18} /> Matemática
            </a>
          </li>
          <li>
            <a href="#">
              <Atom size={18} /> Ciências da Natureza
            </a>
          </li>
          <li>
            <a href="#">
              <BookOpen size={18} /> Ciências Humanas e Sociais
            </a>
          </li>
          <li className={style.dropdown}>
            <a href="#">
              <MessageCircle size={18} /> Linguagens
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className={style.hero}>
        <div className={style.textoH}>
          <h1>
            Vestibular não é <span>sorte</span>, é <span>preparo!</span>
          </h1>
          <p>Estamos aqui para te ajudar a conquistar seus sonhos acadêmicos</p>
          <button className={style.cta}>Começar Agora</button>
        </div>
        <div className={style.imagemH}>
          {/* <img src="..." alt="Estudantes" /> */}
        </div>
      </section>

      <div className={style.containerA}>
        {/* Objetivos */}
        <section className={style.objetivo}>
          <h2 className={style.titulo}>🎯 Nosso Objetivo</h2>
          <p className={style.descricao}>
            O <strong>Mente Ativa</strong> nasceu para ajudar você, estudante do
            ensino médio, a alcançar o seu máximo potencial. 🚀
          </p>

          <div className={style.cards}>
            <div className={style.card}>
              <span className={style.icon}>📈</span>
              <h3>Potencial Máximo</h3>
              <p>Te ajudamos a chegar cada vez mais perto dos seus sonhos.</p>
            </div>

            <div className={style.card}>
              <span className={style.icon}>📚</span>
              <h3>Conteúdo de Qualidade</h3>
              <p>
                Explicações claras, dinâmicas e focadas no ENEM e disciplinas.
              </p>
            </div>

            <div className={style.card}>
              <span className={style.icon}>😊</span>
              <h3>Aprendizado Leve</h3>
              <p>
                Estudar de forma motivadora, acessível e sem peso no dia a dia.
              </p>
            </div>
          </div>
        </section><br />

        {/* Vestibulares */}
        <section className={style.vestibulares}>
          <h2>Principais vestibulares</h2> <br /> <br />
          <div className={style.vestibularesContent}>
            <div className={style.texto}>
              <div className={style.vestibularCard}>
                <h3>📝 Enem</h3>
                <p>
                  Já pensou em garantir a sua vaga em uma boa universidade? O ENEM
                  pode ser o seu passaporte! Aqui, você encontra dicas e
                  estratégias para mandar bem na prova.
                </p>
              </div>

              <div className={style.vestibularCard}>
                <h3>🎓 Fuvest</h3>
                <p>
                  A Fuvest é um dos vestibulares mais concorridos do Brasil. Vamos
                  juntos descomplicar os conteúdos, compartilhar macetes e trazer
                  histórias inspiradoras de quem já passou por esse desafio.
                </p>
              </div>

              <div className={style.vestibularCard}>
                <h3>📚 Unicamp</h3>
                <p>
                  Quer entender como funciona a Unicamp e se preparar da melhor
                  forma? Nós te ajudamos com informações detalhadas, explicações
                  claras e muita prática.
                </p>
              </div>

              <button className={style.btn}>
                <a href="https://www.google.com/"> Conferir agora</a>
              </button>
            </div>

            <div className={style.imagem}>
              <img src="./assets/usp.png" alt="Logo USP" />
            </div>
          </div>
        </section>

        {/* Comentários */}
        <section className={style.comentarios}>
          <h2>Comentários recentes</h2>
          <div className={style.cards}>
            {comentarios.map((c, index) => (
              <div key={index} className={style.card}>
                <h4>"{c.titulo}"</h4>
                <p className={style.descricao}>{c.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export { Inicial };
