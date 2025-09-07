import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { api } from "../../services";
import { useAuth } from "../../hook";

const Login = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const { login } = useAuth();
  
  const navigate = useNavigate();

  async function createUsers(e) {
    e.preventDefault();

    const password = inputPassword.current.value;
    const confirmPassword = inputConfirmPassword.current.value;

    if (confirmPassword !== password) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await api.post("/cadastro", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: password,
      });
      alert("Usuário cadastrado com sucesso!");
      inputName.current.value = "";
      inputEmail.current.value = "";
      inputPassword.current.value = "";
      inputConfirmPassword.current.value = "";
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
      // localStorage.setItem("token", response.data.token);

      login({ username: response.data.username });
      login({ username: inputEmail.current.value.split("@")[0] }); 

      navigate("/");
    } catch (err) {
      alert("Erro no login: " + err.response?.data?.message || err.message);
    }
  }

  const [qualAba, setqualAba] = useState("login");
  function Reset() {
    setqualAba("resetarSenha");
  }

  return (
    <div className={style.Cadastro}>
      <div>
        <div className={style.btnPrincipais}>
        <button className={style.actions} onClick={() => setqualAba("login")}>
          Login
        </button>
        <button className={style.actions} onClick={() => setqualAba("cadastro")}>
          Cadastro
        </button>
        </div>
        
        <div className={style.container}>

          {qualAba === "login" ? (
            <form className={style.forms} onSubmit={loginUsers}>
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

              <div>
                <button type="submit" className={style.btnEntrar}>Entrar</button>
                <button
                  type="button"
                  onClick={Reset}
                >
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
              <button type="submit">Cadastrar</button>
            </form>
          ) : qualAba === "resetarSenha" ? (
            <form>
              <input type="email" placeholder="Email" required />
              <button>Enviar link de recuperação</button>
            </form>
          ) : null}
          <div className={style.circulo}></div>
        </div>
      </div>
    </div>
  );
};

export { Login };
