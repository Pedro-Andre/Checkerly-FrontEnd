import "./EventoContainer.css";
import React, { useState, useEffect } from "react";
import CreateEventBtn from "../Buttons/CreateEventBtn";
import Mapa from "../Mapa/Mapa";

const EventoContainer: React.FC = () => {
  const [eventoName, setEventoName] = useState<string>("");
  const [eventoAssunto, setEventoAssunto] = useState<string>("");
  const [eventoLocal, setEventoLocal] = useState<string>("");
  const [eventoInicio, setEventoInicio] = useState<string>("");
  const [eventoFim, setEventoFim] = useState<string>("");
  const [eventoHora, setEventoHora] = useState<string>("");
  const [selectedCoords, setSelectedCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [userCoords, setUserCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // pega o local armazenado no localStorage
  useEffect(() => {
    const storedCoords = localStorage.getItem("userCoords");

    if (storedCoords) setUserCoords(JSON.parse(storedCoords));
  }, []);

  const handleMarkerAdd = (lat: number, lng: number) => {
    setSelectedCoords({ lat, lng });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      nomeEvento: eventoName,
      assuntoEvento: eventoAssunto,
      localEvento: eventoLocal,
      dataInicio: eventoInicio,
      dataFim: eventoFim,
      horaEvento: eventoHora,
      latitude: selectedCoords?.lat,
      longitude: selectedCoords?.lng,
    };

    fetch("http://localhost:8080/auth/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => console.log("Status da resposta:", res.status))
      .then((data) => {
        console.log("Dados recebidos: ", data);
        try {
          const jsonData = JSON.stringify(data);
          console.log(jsonData);
        } catch (err) {
          console.log("Erros no parse JSON:", err);
        }
      });

    // reset input values
    setEventoName("");
    setEventoAssunto("");
    setEventoLocal("");
    setEventoInicio("");
    setEventoFim("");
    setEventoHora("");
  };

  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Evento</p>
        <svg
          width="100%"
          height="122rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container event-svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="122rem"
            x="-0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_259"
              x1="1.61353"
              y1="1.00342"
              x2="1297.61"
              y2="416.915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009D53" />
              <stop offset="1" stopColor="#F07F3D" />
            </linearGradient>
          </defs>
        </svg>
        <form action="" id="event-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="event-name">
              Nome do Evento
              <input
                required
                type="text"
                name="nome-evento"
                id="event-name"
                placeholder="Nome do evento"
                value={eventoName}
                onChange={(e) => setEventoName(e.target.value)}
              />
            </label>
            <label htmlFor="event-theme">
              Assunto do Evento
              <input
                required
                type="text"
                name="assunto"
                id="event-theme"
                placeholder="Assunto do evento"
                value={eventoAssunto}
                onChange={(e) => setEventoAssunto(e.target.value)}
              />
            </label>
            <label htmlFor="event-local">
              Local do Evento
              {userCoords && (
                <Mapa
                  latitude={userCoords.latitude}
                  longitude={userCoords.longitude}
                  onMarkerAdd={handleMarkerAdd}
                />
              )}
            </label>
            <div className="date-inputs">
              <label htmlFor="event-start">
                Data (início)
                <input
                  required
                  type="date"
                  name="inicio"
                  id="event-start"
                  placeholder="00-00-0000"
                  value={eventoInicio}
                  onChange={(e) => setEventoInicio(e.target.value)}
                />
              </label>
              <label htmlFor="event-end">
                Data (término)
                <input
                  required
                  type="date"
                  name="fim"
                  id="event-end"
                  placeholder="00-00-0000"
                  value={eventoFim}
                  onChange={(e) => setEventoFim(e.target.value)}
                />
              </label>
            </div>
            <label htmlFor="event-hour">
              Hora início do Evento
              <input
                required
                type="time"
                name="hora"
                id="event-hour"
                placeholder="00:00"
                value={eventoHora}
                onChange={(e) => setEventoHora(e.target.value)}
              />
            </label>
          </div>
          <CreateEventBtn />
        </form>
      </div>
    </>
  );
};

export default EventoContainer;
