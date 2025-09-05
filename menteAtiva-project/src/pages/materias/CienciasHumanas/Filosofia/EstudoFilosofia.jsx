import { useLocation } from "react-router-dom";

const Estudofilosofia = () => {
  const location = useLocation();
  const assunto = location.state?.assunto;

  if (!assunto) {
    return <p>Nenhum assunto encontrado</p>;
  }

  return (
    <div>
      <h1>{assunto.titulo}</h1>
      <h2>{assunto.subTitulo}</h2>
      <p>{assunto.resumo}</p>
      <div>
        <h3>Conteúdo de estudo 📚</h3>
        <p>{assunto.conteudoPage}</p>
      </div>
    </div>
  );
};

export { Estudofilosofia };
