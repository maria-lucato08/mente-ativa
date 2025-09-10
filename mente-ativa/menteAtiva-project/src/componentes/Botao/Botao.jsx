import { TIPO_BOTAO } from "./constantes";
import style from "./Botao.module.css";

const Botao = (props) => {
    const { texto, tipo=TIPO_BOTAO.PRIMARIO} = props;
    return(
        <button className={style.botao} tipo={tipo} >
             {texto}
        </button>
    );
};

export { Botao };
