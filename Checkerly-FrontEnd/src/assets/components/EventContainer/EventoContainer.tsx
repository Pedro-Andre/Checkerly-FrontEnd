import "./EventContainer.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../Map/Map";
import CtaButton from "../global/CtaButton";
import SvgContainer from "../global/SvgContainer";

const EventContainer: React.FC = () => {
  const [eventoId, setEventoId] = useState<string>("");
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
  const navigate = useNavigate();

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
      id: eventoId,
      nomeEvento: eventoName,
      assuntoEvento: eventoAssunto,
      localEvento: eventoLocal,
      dataInicio: eventoInicio,
      dataFim: eventoFim,
      horaEvento: eventoHora,
      latitude: selectedCoords?.lat,
      longitude: selectedCoords?.lng,
    };

    fetch("http://localhost:8080/auth/register/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Status da resposta: ", res.status);
        if (res.ok) {
          navigate("/criar-evento/evento-criado");
        }
        console.log("Dados:", data);
      })
      .catch((err) => {
        console.error("Erro no parse JSON:", err);
      });

    // reset input values
    setEventoName("");
    setEventoAssunto("");
    setEventoLocal("");
    setEventoInicio("");
    setEventoFim("");
    setEventoHora("");
    setEventoId("");
  };

  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Evento</p>
        <SvgContainer width="100%" height="122rem" />
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
                <Map
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
          <CtaButton text="Criar Evento" type="submit" />
        </form>
      </div>
    </>
  );
};

export default EventContainer;
