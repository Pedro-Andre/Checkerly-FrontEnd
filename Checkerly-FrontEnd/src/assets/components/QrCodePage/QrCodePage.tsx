// Versão Alisson q funciona

// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import "./QrCodePage.css";
// import api from "../../../services/apiClient";

// const QrCodePage = () => {
//   // Captura o valor do token que o back end vai mandar.
//   const token = () => {
//     try {
//       const response = fetch(`${api}token`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       return response;
//     } catch (error) {
//       console.error("Erro na requisição de autenticação:", error);
//     }
//   };

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qr-code-container">
//             <h1>QR Code do Evento</h1>
//             {token ? (
//               <QRCodeSVG
//                 className="qr-code"
//                 value={`http://localhost:5173/criar-evento/evento-criado/token=${token}`}
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

// ==== TEST ==== \\

// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import "./QrCodePage.css";
// import api from "../../../services/apiClient";
// import { useEffect, useState } from "react";

// const QrCodePage = () => {
//   const [token, setToken] = useState("");
//   const [eventoId, setEventoId] = useState("67226426408bc10fa3dbbe3a"); // Substitua pelo ID real do evento
//   const [userEmail, setUserEmail] = useState("pedropointer@po.com"); // Substitua pelo email do usuário
//   const [userName, setUserName] = useState("Pedro Pointer"); // Substitua pelo nome do usuário

//   useEffect(() => {
//     // Função para capturar o token de autenticação do back-end
//     const fetchToken = async () => {
//       try {
//         const response = await fetch(`${api}token`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (response.ok) {
//           console.log("Response:");
//           console.log(response);
//           const data = await response.json();
//           console.log("Dados:", data);

//           // setToken(data.token);
//         }
//       } catch (error) {
//         console.error("Erro na requisição de autenticação:", error);
//       }
//     };

//     fetchToken();
//   }, []);

//   // Codifica o valor do QR code com os dados necessários
//   const qrValue = `http://localhost:8080/auth/validate/qr?eventId=${eventoId}&email=${encodeURIComponent(
//     userEmail
//   )}&name=${encodeURIComponent(userName)}`;

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qr-code-container">
//             <h1>QR Code do Evento</h1>
//             {token ? (
//               <QRCodeSVG className="qr-code" value={qrValue} size={364} />
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

// ==== TEST POS ERRO ==== \\

//

// == MAIS TESTE == //
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import { QrReader } from "react-qr-reader"; // Importando o QrReader
import "./QrCodePage.css";
import api from "../../../services/apiClient";
import { useState, useEffect } from "react";
import axios from "axios";

const QrCodePage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [qrData, setQrData] = useState<string | null>(null); // Estado para armazenar os dados do QR Code

  const fetchToken = async () => {
    try {
      const response = await api.get(`/${token}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Response completa:", response);
      if (response.status !== 200) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      setToken(response.data.token); // Ajustado para atribuir o token corretamente
    } catch (error) {
      console.error("Erro na requisição de autenticação:", error);
      setError("Erro ao carregar o token do evento.");
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  // Função para lidar com o evento de escaneamento do QR code
  useEffect(() => {
    const handleQRCodeData = async () => {
      if (qrData) {
        try {
          // Dados decodificados do QR Code
          const eventId = "eventId_do_qrcode"; // Substitua com o valor obtido do QR code
          const email = "email_do_usuario"; // Substitua com o valor do usuário logado ou lido do QR code
          const name = "nome_do_usuario"; // Substitua com o valor do usuário logado ou lido do QR code

          const payload = {
            id: eventId,
            email,
            name,
          };

          // Envia os dados para o endpoint de validação do QR Code
          const response = await axios.post(
            "http://localhost:8080/auth/validate/qr",
            payload
          );

          // Trata o sucesso da requisição
          if (response.status === 200) {
            console.log("Certificado enviado com sucesso.");
          }
        } catch (err) {
          setError("Erro ao enviar os dados do QR Code");
          console.error("Erro na requisição de autenticação:", err);
        }
      }
    };

    handleQRCodeData();
  }, [qrData]); // Executa quando qrData mudar

  const handleScan = (data: string | null) => {
    // Atualiza o estado com os dados escaneados
    setQrData(data);
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="qr-code-container">
            <h1>QR Code do Evento</h1>
            {error ? (
              <p>{error}</p>
            ) : token ? (
              <>
                <QRCodeSVG
                  className="qr-code"
                  value={`http://localhost:5173/criar-evento/evento-criado/token=${token}`}
                  size={364}
                />
                <QrReader
                  onScan={handleScan} // Passa a função correta para onScan
                  onError={(err) =>
                    console.error("Erro ao escanear QR Code:", err)
                  }
                  style={{ width: "100%" }}
                />
              </>
            ) : (
              <p>Carregando...</p>
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
