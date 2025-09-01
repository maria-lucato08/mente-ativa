import { useState, useRef } from "react";
import style from "./Login.module.css";
import { api } from "../../services";

const Login = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  async function createUsers(e) {
    e.preventDefault();

    try {
      await api.post("/cadastro", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar: " + err.response?.data?.message || err.message);
    }
  }

  async function loginUsers(e) {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      alert("Login realizado!");
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      alert("Erro no login: " + err.response?.data?.message || err.message);
    }
  }

  const [qualAba, setqualAba] = useState("login");

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
            <form onSubmit={loginUsers}>
              <input type="email" placeholder="Email" required ref={inputEmail}/>
              <input type="password" placeholder="Senha" required ref={inputPassword}/>

              <div>
                <button type="submit">Entrar</button>
                <button type="button" onClick={() => setqualAba("resetarSenha")}>
                  Esqueceu a senha?
                </button>
              </div>
            </form>
          ) : qualAba === "cadastro" ? (
            <form onSubmit={createUsers}>
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
              <button type="submit">
                Cadastrar
              </button>
            </form>
          ) : qualAba === "resetarSenha" ? (
            <form>
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
