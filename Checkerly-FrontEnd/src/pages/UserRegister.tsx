import UserPage from "../assets/components/UserPage/UserPage";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import Footer from "../assets/components/Footer/Footer";

function UserRegister() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <UserPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default UserRegister;
