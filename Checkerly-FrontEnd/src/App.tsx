import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import OrganizerRegister from "./pages/OrganizerRegister";
import UserRegister from "./pages/UserRegister";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import EventCreated from "./pages/EventCreated";
import Perfil from "./pages/Perfil";
import ParticipantsList from "./pages/ParticipantsList";
import QrCodePage from "./assets/components/QrCodePage/QrCodePage";
import ErrorLocation from "./assets/components/ErrorLocation/ErrorLocation";
import EventConfirmation from "./assets/components/EventConfirmation/EventConfirmation";
import ValidateQrCode from "./assets/components/ValidateQrCode/ValidateQrCode";
import AboutPage from "./assets/components/AboutPage/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/criar-evento" element={<CreateEvent />}></Route>
          <Route
            path="/lista-participantes"
            element={<ParticipantsList />}
          ></Route>
          <Route path="/sobre" element={<AboutPage />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/nova-senha"></Route>
          <Route
            path="/registro/registro-organizador"
            element={<OrganizerRegister />}
          ></Route>
          <Route
            path="/registro/registro-ouvinte"
            element={<UserRegister />}
          ></Route>
          <Route
            path="/criar-evento/evento-criado"
            element={<EventCreated />}
          ></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route
            path="/criar-evento/evento-criado"
            element={<Perfil />}
          ></Route>
          <Route
            path="/evento-criado/erro-localizacao"
            element={<ErrorLocation />}
          ></Route>
          <Route path="/evento-criado/qr-code" element={<QrCodePage />}></Route>
          <Route
            path="/evento-criado/token=:token"
            element={<EventConfirmation />}
          />
          <Route path="/evento-criado/validacao" element={<ValidateQrCode />} />
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
