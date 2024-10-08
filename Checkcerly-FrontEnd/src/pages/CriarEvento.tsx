import Nav from "../assets/components/Nav/Nav";
import OrganizadorEvento from "../assets/components/OrganizadorEvento/OrganizadorEvento";
import EventoContainer from "../assets/components/EventoContainer/EventoContainer";
import Footer from "../assets/components/Footer/Footer";

function CriarEvento() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="event-section">
          <OrganizadorEvento />
          <EventoContainer />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default CriarEvento;
