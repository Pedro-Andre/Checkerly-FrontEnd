import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Home from "./pages/Home";
import CriarEvento from "./pages/CriarEvento";
import RegistroOrganizador from "./pages/RegistroOrganizador";
import RegistroOuvinte from "./pages/RegistroOuvinte";
import LoginPage from "./pages/Login";
import Registro from "./pages/Registro";
import EventoCriado from "./pages/EventoCriado";
import Perfil from "./pages/Perfil";
import ListaParticipantes from "./pages/ListaParticipantes";
import QrCodePage from "./assets/components/QrCodePage/QrCodePage";
import ErroLocation from "./assets/components/ErroLocation/ErroLocation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/criar-evento" element={<CriarEvento />}></Route>
          <Route
            path="/lista-participantes"
            element={<ListaParticipantes />}
          ></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/nova-senha"></Route>
          <Route
            path="/registro/registro-organizador"
            element={<RegistroOrganizador />}
          ></Route>
          <Route
            path="/registro/registro-ouvinte"
            element={<RegistroOuvinte />}
          ></Route>
          <Route
            path="/criar-evento/evento-criado"
            element={<EventoCriado />}
          ></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route
            path="/criar-evento/evento-criado"
            element={<Perfil />}
          ></Route>
          <Route path="/erro-localizacao" element={<ErroLocation />}></Route>
          <Route path="/evento-criado/qr-code" element={<QrCodePage />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
