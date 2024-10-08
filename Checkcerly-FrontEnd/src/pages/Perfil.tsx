import Nav from "../assets/components/Nav/Nav";
import PerfilPage from "../assets/components/PerfilPage/PerfilPage";
import Footer from "../assets/components/Footer/Footer";

function Perfil() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="list-container">
          <PerfilPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Perfil;
