import { useState, useRef } from "react";
import style from "./Login.module.css";
import { api } from "../../services";

const Login = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  async function createUsers(){
   await api.post("/login", {
    name: inputName.current.value,
    email: inputEmail.current.value,
    inputPassword: inputPassword.current.value,
   })
  };

  const [activeTab, setActiveTab] = useState("login");
  const [setLoading] = useState(false);

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

        <button
          className={style.actions}
          onClick={() => setActiveTab("cadastro")}
        >
          Cadastro
        </button>

        <div>
          {activeTab === "login" ? (
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />

              <div>
                <button>Entrar</button>
                <button onClick={() => setActiveTab("resetarSenha")}>
                  Esqueceu a senha?
                </button>
              </div>
            </form>
          ) : activeTab === "cadastro" ? (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome" required ref={inputName} />
              <input
                type="email"
                placeholder="Email"
                required
                ref={inputEmail}
              />
              <input
                type="password"
                placeholder="Senha"
                required
                ref={inputPassword}
              />
              <input
                type="password"
                placeholder="Confirme a senha"
                required
                ref={inputConfirmPassword}
              />
              <button type="button" onClick={createUsers}>Cadastrar</button>
            </form>
          ) : activeTab === "resetarSenha" ? (
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" required />

              <button>Enviar link de recuperação</button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { Login };
