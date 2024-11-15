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

// ==== TEST FUNCIONAL ==== \\

// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import "./QrCodePage.css";
// import { useState } from "react";
// import { QrReader } from "react-qr-reader";
// import axios from "axios";
// import api from "../../../services/apiClient";

// const QrCodePage = () => {
//   const enviarTokenParaBackend = async () => {
//     const token = localStorage.getItem("@Checkerly2024!"); // Substitua 'seuTokenKey' pela chave correta do seu token

//     if (!token) {
//       console.error("Token não encontrado no localStorage");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/validate/qr", // Coloque aqui a URL do seu endpoint no Back-End
//         {}, // Pode adicionar dados no body se necessário
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Resposta do servidor:", response.data);
//     } catch (error) {
//       console.error("Erro ao enviar o token para o Back-End:", error);
//     }
//   };

//   const [data, setData] = useState(null);

//   const handleScan = async (scannedData: any) => {
//     if (scannedData) {
//       setData(scannedData);
//       // Quando o QR-Code for escaneado, envie o token para o back-end
//       await enviarTokenParaBackend();
//     }
//   };

//   const handleError = (err: any) => {
//     console.error("Erro ao escanear o QR-Code:", err);
//   };

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
//           {/* <QrReader
//                 delay={300}
//                 onError={handleError}
//                 onScan={handleScan}
//                 style={{ width: "100%" }}
//               />
//               {data && <p>Dados do QR-Code: {data}</p>} */}
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </>
//   );
// };

// export default QrCodePage;

// =====  TESTE QR-CODE SCAN ===== \\

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import "./QrCodePage.css";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";
import api from "../../../services/apiClient";

const QrCodePage = () => {
  const enviarTokenParaBackend = async () => {
    const token = localStorage.getItem("@Checkerly2024!"); // Substitua 'seuTokenKey' pela chave correta do seu token

    if (!token) {
      console.error("Token não encontrado no localStorage");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/validate/qr", // Coloque aqui a URL do seu endpoint no Back-End
        {}, // Pode adicionar dados no body se necessário
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar o token para o Back-End:", error);
    }
  };

  const [data, setData] = useState(null);

  const handleScan = async (scannedData: any) => {
    if (scannedData) {
      setData(scannedData);
      // Quando o QR-Code for escaneado, envie o token para o back-end
      await enviarTokenParaBackend();
    }
  };

  const handleError = (err: any) => {
    console.error("Erro ao escanear o QR-Code:", err);
  };

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
            {/* <QRCodeSVG
              className="qr-code"
              // value={`http://localhost:5173/criar-evento/evento-criado/token=:token`}
              value={`https://www.youtube.com`}
              size={364}
            /> */}
          </div>
          <QrReader
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          {data && <p>Dados do QR-Code: {data}</p>}
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default QrCodePage;
