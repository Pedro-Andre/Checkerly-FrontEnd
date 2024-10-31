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

  console.log(token);

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="qr-code-container">
            <h1>QR Code do Evento</h1>
            {token ? (
              <QRCodeSVG
                className="qr-code"
                value={`http://localhost:5173/criar-evento/evento-criado/token=${token}`}
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
