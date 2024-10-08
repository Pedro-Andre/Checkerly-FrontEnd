import OuvintePage from "../assets/components/OuvintePage/OuvintePage";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import Footer from "../assets/components/Footer/Footer";

function RegistroOuvinte() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <OuvintePage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default RegistroOuvinte;
