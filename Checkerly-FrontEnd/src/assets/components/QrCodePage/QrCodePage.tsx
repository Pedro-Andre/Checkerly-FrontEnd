import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import "./QrCodePage.css";

const QrCodePage: React.FC = () => {
  const location = useLocation();
  const eventInfo = location.state?.eventInfo;

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="qr-code-container">
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
