import { useState } from "react";
import "./OrganizadorEvento.css";

const OrganizadorEvento: React.FC = () => {
  let orgNameInp = document.getElementById(
    "organizador-name"
  ) as HTMLInputElement;
  let orgDiscInp = document.getElementById(
    "organizador-email"
  ) as HTMLInputElement;
  let orgEmailInp = document.getElementById(
    "organizador-email"
  ) as HTMLInputElement;

  const [organizadorName, setOrganizadorName] = useState<string>("");
  const [organizadorDisc, setOrganizadorDisc] = useState<string>("");
  const [organizadorEmail, setOrganizadorEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      organizadorName,
      organizadorDisc,
      organizadorEmail,
    };
    console.log(data);

    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nome: orgNameInp,
        disciplina: orgDiscInp,
        email: orgEmailInp,
      }),
    })
      .then((res) => console.log("Status da resposta:", res.status))
      .then((data) => {
        console.log("Dados recebidos:", data);
        try {
          const jsonData = JSON.stringify(data);
          console.log(jsonData);
        } catch (err) {
          console.log("Erro no parse JSON:", err);
        }
      });

    // reset input values
    orgNameInp.value = "";
    orgDiscInp.value = "";
    orgEmailInp.value = "";
  };

  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Organizador do Evento</p>
        <svg
          width="100%"
          height="50rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="50rem"
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
        <form action="" id="org-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="organizador-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="organizador-name"
                placeholder="Seu nome"
                value={organizadorName}
                onChange={(e) => setOrganizadorName(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-disc">
              Disciplina
              <input
                required
                type="text"
                name="disciplina"
                id="organizador-disc"
                placeholder="Sua disciplina"
                value={organizadorDisc}
                onChange={(e) => setOrganizadorDisc(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-email">
              Email
              <input
                required
                type="email"
                name="mail"
                id="organizador-email"
                placeholder="Seu email"
                value={organizadorEmail}
                onChange={(e) => setOrganizadorEmail(e.target.value)}
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrganizadorEvento;
