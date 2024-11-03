import { useState } from "react";
import CreateAcc from "../Buttons/CreateAccBtn";

const OrganizerPage: React.FC = () => {
  const [organizadorName, setOrganizadorName] = useState<string>("");
  const [organizadorEmail, setOrganizadorEmail] = useState<string>("");
  const [organizadorPass, setOrganizadorPass] = useState<string>("");
  const [organizadorTel, setOrganizadorTel] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: organizadorName,
      email: organizadorEmail,
      password: organizadorPass,
      celular: organizadorTel,
    };

    fetch("http://localhost:8080/auth/register/organizer", {
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
    setOrganizadorName("");
    setOrganizadorEmail("");
    setOrganizadorPass("");
    setOrganizadorTel("");
  };

  return (
    <>
      <div className="container organizador-container">
        <p className="container-title">
          Registrando-se como: <span>Organizador de Eventos</span>
        </p>
        <svg
          width="100%"
          height="65rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="65rem"
            x="-0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_259"
              x1="1.61353"
              y1="1.00342"
              x2="1297.61"
              y2="416.915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009D53" />
              <stop offset="1" stopColor="#F07F3D" />
            </linearGradient>
          </defs>
        </svg>
        <form id="organizador-login-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="organizador-login-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="organizador-login-name"
                placeholder="Seu nome"
                value={organizadorName}
                onChange={(e) => setOrganizadorName(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-email">
              Email
              <input
                required
                type="text"
                name="nome"
                id="organizador-login-email"
                placeholder="Seu email"
                value={organizadorEmail}
                onChange={(e) => setOrganizadorEmail(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-senha">
              Senha
              <input
                required
                type="password"
                name="senha"
                id="organizador-login-senha"
                placeholder="Sua senha"
                value={organizadorPass}
                onChange={(e) => setOrganizadorPass(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-cel">
              Nº de Celular
              <input
                required
                type="tel"
                name="senha"
                id="organizador-login-cel"
                placeholder="Seu número de celular"
                value={organizadorTel}
                onChange={(e) => setOrganizadorTel(e.target.value)}
              />
            </label>
          </div>
          <CreateAcc />
        </form>
      </div>
    </>
  );
};

export default OrganizerPage;
