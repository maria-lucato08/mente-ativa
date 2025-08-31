import { act, useState } from "react";
import style from "./Cadastro.module.css";

const Cadastro = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simula requisição
  };

  return (
    <div className={style.Cadastro}>

        <div>

          <button className={style.actions} onClick={() => setActiveTab("login")}>
            Login
          </button>

          <button className={style.actions} onClick={() => setActiveTab("cadastro")}>
            Cadastro
          </button>

          <div>


          {activeTab === "login" ?(
            <form>

            <input type="email" placeholder="Email" required /> 
            <input type="password" placeholder="Senha" required />
             
              <div> 
                <button>Entrar</button>
                <button onClick={()=> setActiveTab("resetarSenha")}>Esqueceu a senha?</button>
              </div>

            </form>)

          :activeTab === "cadastro"?(        
          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <input type="password" placeholder="Confirme a senha" required />

            <button>Cadastrar</button>

          </form>)
          :activeTab === "resetarSenha"?(
          <form onSubmit={handleSubmit}>

            <input type="email" placeholder="Email" required />

            <button>Enviar link de recuperação</button>

          </form>
          ):null}          
          </div>
        </div>

    </div>
  );
};

export { Cadastro };
