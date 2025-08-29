import { Outlet } from "react-router-dom";
import { ConteudoMateria } from "../../componentes";

const LayoutMateria = () => {
  return (
    <>
      <ConteudoMateria>
        <Outlet />
      </ConteudoMateria>
    </>
  );
};

export { LayoutMateria };
