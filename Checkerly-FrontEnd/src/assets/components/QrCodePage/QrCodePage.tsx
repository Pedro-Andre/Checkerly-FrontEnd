// import React from "react";
// import { useState } from "react";
// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import SendEmail from "../Buttons/SendEmail";
// import { QRCodeSVG } from "qrcode.react";
// import { useLocation } from "react-router-dom";
// import "./QrCodePage.css";

// const QrCodePage: React.FC = () => {
//   const location = useLocation();
//   const eventInfo = location.state?.eventInfo;

//   const [ouvinteEmail, setOuvinteEmail] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       email: ouvinteEmail,
//     };

//     fetch("http://localhost:8080/auth/register/user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((res) => {
//       console.log(`Status da resposta: ${res.status}`);
//       try {
//         console.log("Dados:", data);
//       } catch (err) {
//         console.error("Erro no parse JSON:", err);
//       }
//     });

//     // reset email value
//     setOuvinteEmail("");
//   };

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qr-code-container">
//             <div className="container ouv-container">
//               <p className="container-title">
//                 Insira seu email, depois <br />
//                 <span>clique no botão e scaneie o Qr-Code abaixo: </span>
//               </p>
//             </div>

//             <form action="" id="ouvinte-form" onSubmit={handleSubmit}>
//               <div className="inputs input-email">
//                 <label htmlFor="ouvinte-email">
//                   Email
//                   <input
//                     required
//                     type="email"
//                     name="nome"
//                     id="ouvinte-email"
//                     placeholder="Seu email"
//                     value={ouvinteEmail}
//                     onChange={(e) => setOuvinteEmail(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <SendEmail />
//             </form>

//             <h1>QR Code do Evento</h1>
//             {eventInfo ? (
//               <QRCodeSVG
//                 className="qr-code"
//                 value={`http://localhost:5173/criar-evento/evento-criado/${eventInfo.id}`}
//                 size={364}
//               />
//             ) : (
//               <p>Dados do evento não disponíveis.</p>
//             )}
//           </div>
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </>
//   );
// };

// export default QrCodePage;

// ========= \\

import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import SendEmail from "../Buttons/SendEmail";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import "./QrCodePage.css";

const QrCodePage: React.FC = () => {
  const location = useLocation();
  const eventInfo = location.state?.eventInfo;

  const [token, setToken] = useState<string | null>(null);
  // const [ouvinteEmail, setOuvinteEmail] = useState<string>("");

  // Função para obter o token do back-end (supondo que o usuário já está autenticado)
  const fetchToken = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/attendance/presence",
        {
          // endpoint de autenticação
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "user@example.com", // Insira as credenciais corretas
            password: "password",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setToken(data.token); // Armazene o token no estado
        localStorage.setItem("jwtToken", data.token); // Opcional: armazene no localStorage
      } else {
        console.error("Falha ao obter o token");
      }
    } catch (error) {
      console.error("Erro na requisição de autenticação:", error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      fetchToken();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      console.error("Token não disponível");
      return;
    }

    // const data = {
    //   email: ouvinteEmail,
    // };

    const response = await fetch("URL_DO_BACKEND/api/presenca", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Envia o token JWT no cabeçalho de autorização
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Presença registrada com sucesso!");
    } else {
      console.error("Erro ao registrar presença:", response.status);
    }

    // setOuvinteEmail("");
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="qr-code-container">
            {/* <div className="container ouv-container">
              <p className="container-title">
                Insira seu email, depois <br />
                <span>clique no botão e scaneie o Qr-Code abaixo: </span>
              </p>
            </div> */}

            {/* <form id="ouvinte-form" onSubmit={handleSubmit}>
              <div className="inputs input-email">
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
              </div>
              <SendEmail />
            </form> */}

            <h1>QR Code do Evento</h1>
            {eventInfo ? (
              <QRCodeSVG
                className="qr-code"
                value={`http://localhost:5173/criar-evento/evento-criado/${eventInfo.id}`}
                size={364}
              />
            ) : (
              <p>Dados do evento não disponíveis.</p>
            )}
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default QrCodePage;
