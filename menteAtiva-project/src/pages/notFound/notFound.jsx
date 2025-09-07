import style from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.texto}>
       <h1>Erro 404</h1>
       <p>Página não encontrada</p>
      </div>
      <img src="./assets/imgNotFound.png" alt="computador" width={300} height={300} />
    </div>
  );
};

export { NotFound };
