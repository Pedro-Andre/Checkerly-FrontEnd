import Footer from "../assets/components/Footer/Footer";
import Nav from "../assets/components/Nav/Nav";
import ListaPage from "../assets/components/ListaPage/ListaPage";

function ListaParticipantes() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="list-container">
          <ListaPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default ListaParticipantes;
