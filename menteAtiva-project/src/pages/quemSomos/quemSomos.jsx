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
      <div className={style.osCriadores}>
        <h1 className={style.titulo}>Os criadores</h1>
        <p className={style.subtitulo}>Saiba mais sobre os criadoes do Mente Ativa!</p>
      </div>
      <div>
        {/* Imagem + botões */}
        <div className={style.carrosselConteudo}>
          <button
            className={style.carroselBtn}
            onClick={() => mudarCriador(-1)}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={criadorAtual.imagem}
            alt={criadorAtual.nome}
            className={style.carrosselImg}
          />

          <button onClick={() => mudarCriador(1)} className={style.carroselBtn}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Texto */}
        <div className={style.info}>
          <h2>{criadorAtual.nome}</h2>
          <p>{criadorAtual.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export { QuemSomos };
