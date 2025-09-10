import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componentes";

const LayoutPadrao = () => {
    return(
        <>
        <Cabecalho/>
         <Conteudo>
            <Outlet/>
         </Conteudo>
        <Rodape/>
        </>
    );
};

export { LayoutPadrao };