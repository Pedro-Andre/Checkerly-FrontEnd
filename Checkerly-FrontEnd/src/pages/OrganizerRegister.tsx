import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import OrganizerPage from "../assets/components/OrganizerPage/OrganizerPage";
import Footer from "../assets/components/Footer/Footer";

function OrganizerRegister() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <OrganizerPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default OrganizerRegister;
