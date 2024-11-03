import Nav from "../assets/components/Nav/Nav";
import OrganizadorEvento from "../assets/components/OrganizerEvent/OrganizerEvent";
import EventContainer from "../assets/components/EventContainer/EventoContainer";
import Footer from "../assets/components/Footer/Footer";

function CreateEvent() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="event-section">
          <OrganizadorEvento />
          <EventContainer />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default CreateEvent;
