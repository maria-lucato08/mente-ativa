import { Link } from "react-router-dom";
import style from "./EdFisica.module.css";

const EdFisica = () => {
  return (
    <div className={style.pag}>
      <div className={style.titulo}>
        <h1>EDUCAÇÃO FÍSICA</h1>
      </div>
      <section className={style.vestibulares}>
        <div className={style.primeirosCards}>
          <div className={style.vestibularCard}>
            <h3>Brincadeiras e Jogos</h3>
            <h4>Lúdico, inclusão e estratégias</h4>
            <p>
              Envolvemos brincadeiras populares, livres e dirigidas, além dos
              jogos competitivos, cooperativos, recreativos, eletrônicos e de
              interpretação, com foco na socialização, inclusão e cultura.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/brincadeirasJogos">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Esportes</h3>
            <h4>Técnicas, regras e espetáculos</h4>
            <p>
              Classificamos modalidades (rede/parede, campo e taco, invasão,
              paralímpicos e alternativos), aborda regras, táticas, arbitragem,
              influência da mídia, organização de eventos e espaços de prática.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/esportes">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Dança</h3>
            <h4>Expressão corporal e cultura</h4>
            <p>
              Analisamos classificações, origens e estilos da dança (popular,
              clássica, urbana, contemporânea etc.), explorando seu papel
              cultural e social no Brasil e no mundo.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/danca">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Ginástica</h3>
            <h4>Saúde, performance e modalidades</h4>
            <p>
              Abrange práticas competitivas (artística, acrobática, rítmica,
              aeróbica, trampolim) e não competitivas (laboral, localizada,
              hidroginástica etc.), unindo condicionamento físico, bem-estar e
              tecnologia.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/gisnastica">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>

        <div className={style.segundosCards}>
          <div className={style.vestibularCard}>
            <h3>Luta</h3>
            <h4>Tradição, técnica e espetáculo</h4>
            <p>
              Estudamos lutas no Brasil e no mundo, suas classificações,
              aspectos técnicos, táticos e filosóficos, além da influência da
              mídia, arbitragem e organização de eventos.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/luta">
                Conferir agora
              </Link>
            </button>
          </div>

          <div className={style.vestibularCard}>
            <h3>Desafios, espaços e preservação</h3>
            <h4>A arte como reflexo e influência social</h4>
            <p>
              Envolve atividades em ambientes naturais e urbanos, valorizando
              risco, superação, preservação ambiental e experiências culturais.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/praticasCorporais-aventura">
                Conferir agora
              </Link>
            </button>
          </div>
          <div className={style.vestibularCard}>
            <h3>Corpo, Movimento e Saúde</h3>
            <h4>Qualidade de vida e cultura corporal</h4>
            <p>
              Relaciona atividade física com saúde, prevenção e qualidade de
              vida, abordando hábitos, riscos (sedentarismo, substâncias,
              estresse), fisiologia do movimento e identidade cultural do corpo.
            </p>
            <button className={style.btn}>
              <Link to="/materias/linguagens/edFisica/corpo-movimento-saude">
                Conferir agora
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { EdFisica };
