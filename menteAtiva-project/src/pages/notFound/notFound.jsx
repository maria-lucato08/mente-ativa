import style from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export { NotFound };
