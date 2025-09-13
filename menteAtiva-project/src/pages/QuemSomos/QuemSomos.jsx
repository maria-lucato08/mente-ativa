import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import style from "./QuemSomos.module.css";

const quemSomos = [
  { nome: "Maria Elis", 
  descricao: "Sou estudante do curso técnico em Desenvolvimento de Sistemas, onde venho aprendendo a programar, desenvolver projetos e aplicar soluções tecnológicas na prática. Essa trajetória tem me permitido crescer tanto no lado acadêmico quanto no profissional.",
  imagem: "./assets/fotoMaria.jpg  " },
  {
    nome: "Guilherme Vieira",
    descricao: "Sou estudante do curso técnico em Desenvolvimento de Sistemas, onde venho aprendendo a programar, desenvolver projetos e aplicar soluções tecnológicas na prática. Essa trajetória tem me permitido crescer tanto no lado acadêmico quanto no profissional.",
    imagem: "./assets/fotoGuilherme.jpg",
  },
  {
    nome: "Yasmin Amaral",
    descricao: "Sou estudante do curso técnico em Desenvolvimento de Sistemas, onde venho aprendendo a programar, desenvolver projetos e aplicar soluções tecnológicas na prática. Essa trajetória tem me permitido crescer tanto no lado acadêmico quanto no profissional.",
    imagem: "./assets/fotoYasmin.jpg",
  },
  { nome: "Maxwell", 
  descricao: "Sou estudante do curso técnico em Desenvolvimento de Sistemas, onde venho aprendendo a programar, desenvolver projetos e aplicar soluções tecnológicas na prática. Essa trajetória tem me permitido crescer tanto no lado acadêmico quanto no profissional.",
  imagem: "./assets/fotoMaxwell.jpg" },
];
const QuemSomos = () => {
  const [indice, setIndice] = useState(0);

  const mudarCriador = (direcao) => {
    setIndice(
      (indiceNaoAtualizado) =>
        (indiceNaoAtualizado + direcao + quemSomos.length) % quemSomos.length
    );
  };

  const criadorAtual = quemSomos[indice];

  return (
    <div className={style.QuemSomos}>
      <div className={style.alinha}> 
        {/* Título */}
        <div className={style.osCriadores}>
          <h2>Os Criadores</h2>
          <p>Saiba mais sobre os criadores do Mente Ativa!</p>
        </div>

        <div className={style.alinha2}>
          {/* Carrossel */}
          <div className={style.carrosselConteudo}>
            <button
              className={style.carrosselBtn}
              onClick={() => mudarCriador(-1)}
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={criadorAtual.imagem}
              alt={criadorAtual.nome}
              className={style.carrosselImg}
            />

            {/* Texto do Criador */}
            <div className={style.info}>
              <div className={style.pessoa}>
                <h2>{criadorAtual.nome}</h2>
              </div>

              {/* Tragetória do Criador */}
              <div className={style.pessoa}>
                <h2>Trajetória de {criadorAtual.nome}</h2>
                <p>{criadorAtual.descricao}</p>
              </div>
            </div>

            <button
              className={style.carrosselBtn}
              onClick={() => mudarCriador(1)}
            >
              <ChevronRight size={24} />
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export { QuemSomos };
