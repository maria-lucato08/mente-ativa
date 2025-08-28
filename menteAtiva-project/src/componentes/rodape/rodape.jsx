import style from "./rodape.module.css";

const Rodape = () => {
  return (
    <section className={style.rodape}>
      <div>
        <div>
          <div>
            <img
              src="./assets/JUNCAO.png"
              alt="Mente Ativa"
              width={200}
              height={100}
            />
          </div>
          <div>
            <a href="#">
              <img src="./assets/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="./assets/logotipo-do-linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="./assets/youtube.png" alt="YouTube" />
            </a>
            <a href="#">
              <img src="./assets/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div>
          <h3>Tópico</h3>
          <ul>
            <li>
              <a href="#">Vestibulares</a>
            </li>
            <li>
              <a href="#">Vestibulinhos</a>
            </li>
            <li>
              <a href="#">Inscrições</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Exatas</h3>
          <ul>
            <li>
              <a href="#">Matemática</a>
            </li>
            <li>
              <a href="#">Química</a>
            </li>
            <li>
              <a href="#">Física</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Humanas</h3>
          <ul>
            <li>
              <a href="#">História</a>
            </li>
            <li>
              <a href="#">Geografia</a>
            </li>
            <li>
              <a href="#">Português</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Rodape };
