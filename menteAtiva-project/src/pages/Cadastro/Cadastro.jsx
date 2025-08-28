import { useState } from "react";
import { Botao } from "../../componentes";
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
    <div className={style.authContainer}>
      <div className={style.card}>
        {/* Tabs */}
        <div className={style.tabsList}>
          <Botao
            className={`${style.tabButton} ${
              activeTab === "login" ? style.active : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </Botao>
          <Botao
            className={`${style.tabButton} ${
              activeTab === "signup" ? style.active : ""
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Cadastro
          </Botao>
        </div>

        {/* LOGIN */}
        {activeTab === "login" && (
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              type="email"
              placeholder="Email"
              required
              className={style.input}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              className={style.input}
            />
            <button type="submit" disabled={loading} className={style.button}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        )}

        {/* CADASTRO */}
        {activeTab === "signup" && (
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              type="text"
              placeholder="Nome"
              required
              className={style.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={style.input}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              className={style.input}
            />
            <button type="submit" disabled={loading} className={style.button}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export { Cadastro };
