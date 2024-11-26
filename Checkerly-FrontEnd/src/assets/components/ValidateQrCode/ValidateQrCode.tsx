import { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "../OrganizerEvent/OrganizerEvent.css";
import CtaButton from "../global/CtaButton";
import SvgContainer from "../global/SvgContainer";

const ValidateQrCode = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
    };
    console.log(data);

    try {
      const response = await fetch("http://localhost:8080/auth/validate/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/evento-criado/token=:token");
      }

      if (!response.ok) {
        navigate("/evento-criado/erro-localizacao");
      }
    } catch (err) {
      setErrorMessage(
        "Houve um Erro! Verifique se você está com a localização ligada e permitiu o acesso a ela. Depois tente novamente. ."
      );
    }

    // reset inputs value
    setEmail("");
    setName("");
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="validate-container">
        <div className="container">
          <h2 className="container-title">
            Preencha os campos para receber seu certificado
          </h2>
          <SvgContainer width="100%" height="27rem" className="svg-container" />
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
            <CtaButton text="Enviar" type="submit" />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default ValidateQrCode;
