import Footer from "../assets/components/Footer/Footer";
import Nav from "../assets/components/Nav/Nav";
import RegisterPage from "../assets/components/RegisterPage/RegisterPage";

function Register() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="registro-section">
          <RegisterPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Register;
