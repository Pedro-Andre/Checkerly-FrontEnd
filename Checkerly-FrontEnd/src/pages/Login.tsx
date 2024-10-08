import Nav from "../assets/components/Nav/Nav";
import LoginPage from "../assets/components/LoginPage/LoginPage";
import Footer from "../assets/components/Footer/Footer";

function Login() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="login">
          <LoginPage />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Login;
