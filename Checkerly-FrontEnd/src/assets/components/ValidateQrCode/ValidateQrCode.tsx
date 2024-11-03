import { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "../OrganizerEvent/OrganizerEvent.css";
import CreateEventBtn from "../Buttons/CreateEventBtn2";

const ValidateQrCode = () => {
  const [name, setName] = useState("");
  const [eventId, setEventId] = useState("");
  const [pdfPath, setPdfPath] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailDTO = {
      name,
      id: eventId,
      pdfPath,
      email,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/validate/qr",
        emailDTO
      );
      setMessage(response.data); // Mensagem de sucesso
    } catch (error) {
      setMessage("Erro ao enviar o certificado."); // Mensagem de erro
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <div className="container">
          <h2 className="container-title">Validar QR Code</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="qr-input-name">
                <input
                  type="text"
                  id="qr-input-name"
                  placeholder="Nome do Usuário"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="qr-input-id">
                <input
                  type="text"
                  id="qr-input-id"
                  placeholder="ID do Evento"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="qr-code-pdf">
                <input
                  type="text"
                  id="qr-code-pdf"
                  placeholder="Caminho do PDF"
                  value={pdfPath}
                  onChange={(e) => setPdfPath(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="qr-input-email">
                <input
                  type="email"
                  id="qr-input-email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <CreateEventBtn />
          </form>
          {message && <p>{message}</p>}
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default ValidateQrCode;
