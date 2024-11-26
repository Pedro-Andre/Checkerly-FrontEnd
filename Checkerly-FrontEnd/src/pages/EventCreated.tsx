import EventImg from "../assets/components/imgs/EventImg";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import CtaButton from "../assets/components/global/CtaButton";

function EventCreated() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main main-img">
        <h1>Evento criado com sucesso!</h1>
        <div className="event-img-container">
          <EventImg />
          <CtaButton text="Criar Qr-Code" to="/evento-criado/qr-code" />
          <CtaButton text="Ver meus eventos" to="/perfil" />
        </div>
      </section>
    </>
  );
}

export default EventCreated;
