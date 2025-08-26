import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import style from "./quemSomos.module.css";

const quemSomos = [
  { nome: "Maria Elis", descricao: "descrição futura", imagem: "./assets/fotoTeste.png" },
  {
    nome: "Guilherme Vieira",
    descricao: "descrição futura",
    imagem: "./assets/fotoTeste.png",
  },
  {
    nome: "Yasmin Amaral",
    descricao: "descrição futura",
    imagem: "./assets/fotoTeste.png",
  },
  { nome: "Maxwell", descricao: "descrição futura", imagem: "./assets/fotoTeste.png" },
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
      {/* Título */}
      <div className={style.osCriadores}>
        <h2>Os Criadores</h2>
        <p>Saiba mais sobre os criadores do Mente Ativa!</p>
      </div>

      {/* Carrossel */}
      <div > 
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

          <button
            className={style.carrosselBtn}
            onClick={() => mudarCriador(1)}
          >
            <ChevronRight size={24} />
          </button>
          </div>
        </div>

        {/* Texto do Criador */}
        <div className={style.info}>
        <div className={style.pessoa}>
          <h2>{criadorAtual.nome}</h2>
          <p>{criadorAtual.descricao}</p>
        </div>
         {/* Tragetória do Criador */}
        <div className={style.pessoa}>
          <h2>Tragetória de {criadorAtual.nome}</h2>
          <p>{criadorAtual.descricao}</p>
        </div>
        </div>
      </div>
  );
};

export { QuemSomos };
