import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import CtaButton from "../global/CtaButton";
import SvgContainer from "../global/SvgContainer";

const LoginPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: loginEmail,
      password: loginPass,
    };
    console.log(data);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/perfil");
      }

      const isLoggedIn = () => {
        return localStorage.getItem("token");
      };

      isLoggedIn();

      if (!response.ok) {
        const errorText = await response.json();
        if (errorText.message === "email incorreto") {
          setErrorMessage("Email incorreto");
        } else if (errorText.message === "senha incorreta") {
          setErrorMessage("Senha incorreta");
        } else {
          setErrorMessage("Credenciais inválidas");
        }
        return;
      }

      navigate("/perfil");
    } catch (error) {
      setErrorMessage("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <div className="container">
        <p className="container-title">Login</p>
        <SvgContainer width="100%" height="40rem" className="svg-container" />
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="login-email">
              Email
              <input
                type="email"
                id="login-email"
                placeholder="Seu email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </label>
            <label htmlFor="login-pass">
              Senha
              <input
                type="password"
                id="login-pass"
                placeholder="Sua senha"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
              />
            </label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Link to={"/nova-senha"} className="nova-senha">
            Esqueceu a senha? Clique aqui para redefinir
          </Link>
          <Link to={"/registro"} className="nova-senha">
            Não tem uma conta?
            <span> Crie uma agora</span>
          </Link>
          <CtaButton text="Entrar" type="submit" />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
