import Footer from "../assets/components/Footer/Footer";
import Nav from "../assets/components/Nav/Nav";
import ListPage from "../assets/components/ListPage/ListPage";

function ParticipantsList() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="list-container">
          <ListPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default ParticipantsList;
