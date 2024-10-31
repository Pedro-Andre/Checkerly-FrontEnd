import QrdCodeBtn from "../assets/components/Buttons/QrCodeBtn";
import SeeEventsBtn from "../assets/components/Buttons/SeeEventsBtn";
import EventImg from "../assets/components/imgs/EventImg";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";

function EventoCriado() {
  // Suponha que você tenha acesso ao ID do evento e outros dados aqui
  const eventInfo = {
    id: "12345",
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main main-img">
        <h1>Evento criado com sucesso!</h1>
        <div className="event-img-container">
          <EventImg />
          <QrdCodeBtn eventInfo={eventInfo} />
          <SeeEventsBtn />
        </div>
      </section>
    </>
  );
}

export default EventoCriado;
