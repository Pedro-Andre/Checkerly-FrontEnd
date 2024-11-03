// === BACKUP FUNCIONAL === \\

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
//             <QRCodeSVG
//               className="qr-code"
//               // value={`http://localhost:5173/criar-evento/evento-criado/token=:token`}
//               value={`https://www.youtube.com`}
//               size={364}
//             />
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

// ==== TEST 1 ==== \\

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import "./QrCodePage.css";
import api from "../../../services/apiClient";

const QrCodePage = () => {
  // Captura o valor do token que o back end vai mandar.
  const token = () => {
    try {
      const response = fetch(`${api}token`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error("Erro na requisição de autenticação:", error);
    }
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
            <QRCodeSVG
              className="qr-code"
              // value={`http://localhost:5173/criar-evento/evento-criado/token=:token`}
              value={`https://www.youtube.com`}
              size={364}
            />
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
//   const [error, setError] = useState("Pedro Pointer"); // Substitua pelo nome do usuário

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

//   const fetchToken = async () => {
//     try {
//       const response = await api.get(`/${token}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Response completa:", response);
//       if (response.status !== 200) {
//         throw new Error(`Erro ${response.status}: ${response.statusText}`);
//       }
//       setToken(response.data.token); // Ajustado para atribuir o token corretamente
//     } catch (error) {
//       console.error("Erro na requisição de autenticação:", error);
//       setError("Erro ao carregar o token do evento.");
//     }
//   };

//   useEffect(() => {
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
