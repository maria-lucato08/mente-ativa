import { useLocation } from "react-router-dom";
import style from "./EstudoBiologia.module.css";

const EstudoBiologia = () => {
  const location = useLocation();
  const assunto = location.state?.assunto;

  if (!assunto) {
    return <p>Nenhum conteudo encontrado</p>;
  }

  return (
    <div className={style.titulo}>
      <h1>{assunto.titulo}</h1>
      <h2>{assunto.subTitulo}</h2>
      <p>{assunto.conteudoPage}</p>
      <div></div>
    </div>
  );
};

export { EstudoBiologia };
