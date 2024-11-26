import { useState } from "react";
import CtaButton from "../global/CtaButton";
import SvgContainer from "../global/SvgContainer";

const UserPage: React.FC = () => {
  const [ouvinteName, setOuvinteName] = useState<string>("");
  const [ouvinteEmail, setOuvinteEmail] = useState<string>("");
  const [ouvintePass, setOuvintePass] = useState<string>("");
  const [ouvinteTel, setOuvinteTel] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: ouvinteName,
      email: ouvinteEmail,
      password: ouvintePass,
      celular: ouvinteTel,
    };

    fetch("http://localhost:8080/auth/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(`Status da resposta: ${res.status}`);
      try {
        console.log("Dados:", data);
      } catch (err) {
        console.error("Erro no parse JSON:", err);
      }
    });

    // reset input values
    setOuvinteName("");
    setOuvinteEmail("");
    setOuvintePass("");
    setOuvinteTel("");
  };

  return (
    <>
      <div className="container ouv-container">
        <p className="container-title">
          Registrando-se como: <span>Ouvinte</span>
        </p>
        <SvgContainer width="100%" height="65rem" className="svg-container" />
        <form action="" id="ouvinte-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="ouvinte-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="ouvinte-name"
                placeholder="Seu nome"
                value={ouvinteName}
                onChange={(e) => setOuvinteName(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-email">
              Email
              <input
                required
                type="email"
                name="nome"
                id="ouvinte-email"
                placeholder="Seu email"
                value={ouvinteEmail}
                onChange={(e) => setOuvinteEmail(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-senha">
              Senha
              <input
                required
                type="password"
                name="senha"
                id="ouvinte-senha"
                placeholder="Sua senha"
                value={ouvintePass}
                onChange={(e) => setOuvintePass(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-cel">
              Nº de Celular
              <input
                required
                type="tel"
                name="senha"
                id="ouvinte-cel"
                placeholder="Seu número de celular"
                value={ouvinteTel}
                onChange={(e) => setOuvinteTel(e.target.value)}
              />
            </label>
          </div>
          <CtaButton text="Entrar" type="submit" />
        </form>
      </div>
    </>
  );
};

export default UserPage;
