import Nav from "../Nav/Nav";
import "./EventConfirmation.css";
import CtaButton from "../global/CtaButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EventConfirmation = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/home");
    }
  }, [count, navigate]);

  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="validate-container">
        <div className="confirmation">
          <h3>
            Você estava Presente no local e hora do Evento! Verifique seu e-mail
            para ter acesso ao seu Certificado!
          </h3>
          <p>
            Você vai ser redirecionado para a Tela Inicial em{" "}
            <span>{count}</span> segundos...
          </p>
          <CtaButton text="Voltar para Home" to="/home" />
        </div>
      </main>
    </>
  );
};

export default EventConfirmation;
