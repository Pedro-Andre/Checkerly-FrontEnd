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

// SIMULANDO

// import React, { useEffect, useState } from "react";
// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import "./QrCodePage.css";

// const QrCodePage = () => {
//   const [eventoId, setEventoId] = useState<string>("");

//   useEffect(() => {
//     // Recupera o ID do evento do localStorage
//     const storedEventoId = localStorage.getItem("eventoId");
//     if (storedEventoId) {
//       setEventoId(storedEventoId);
//     } else {
//       console.warn("ID do evento não encontrado no localStorage.");
//     }
//   }, []);

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qr-code-container">
//             <h1>QR Code do Evento</h1>
//             {eventoId ? (
//               <QRCodeSVG
//                 className="qr-code"
//                 value={`http://localhost:8080/validate/qr?id=${eventoId}`}
//                 size={364}
//               />
//             ) : (
//               <p>Carregando QR Code...</p>
//             )}
//           </div>
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//   </>
//   );
// };
// export default QrCodePage;

// TESTE COM O ENVIO PARA A TELA DOS CAMPOS
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import "./QrCodePage.css";

const QrCodePage = () => {
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
              value={`http://localhost:5173/criar-evento/evento-criado/teste`}
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
