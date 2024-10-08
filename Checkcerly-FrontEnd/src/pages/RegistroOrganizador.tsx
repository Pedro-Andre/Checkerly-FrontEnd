import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import OrganizadorPage from "../assets/components/OrganizadorPage/OrganizadorPage";
import Footer from "../assets/components/Footer/Footer";

function RegistroOrganizador() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <OrganizadorPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default RegistroOrganizador;
