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
    password: inputPassword.current.value,
   })
  };

  const [qualAba, setqualAba] = useState("login");
  const [carregamento, setCarregamento] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregamento(true);
  };

  return (
    <div className={style.Cadastro}>
      <div>
        <button className={style.actions} onClick={() => setqualAba("login")}>
          Login
        </button>

        <button
          className={style.actions}
          onClick={() => setqualAba("cadastro")}
        >
          Cadastro
        </button>

        <div>
          {qualAba === "login" ? (
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />

              <div>
                <button>Entrar</button>
                <button onClick={() => setqualAba("resetarSenha")}>
                  Esqueceu a senha?
                </button>
              </div>
            </form>
          ) : qualAba === "cadastro" ? (
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
              <button type="submit" onClick={createUsers}>Cadastrar</button>
            </form>
          ) : qualAba === "resetarSenha" ? (
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
