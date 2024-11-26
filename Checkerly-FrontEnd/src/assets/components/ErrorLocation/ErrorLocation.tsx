import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import CtaButton from "../global/CtaButton";

function ErrorLocation() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="validate-container">
        <section>
          <div className="text-container">
            <p
              style={{
                marginTop: "15rem",
                textAlign: "center",
                fontSize: "3.5rem",
                width: "80%",
                marginInline: "auto",
              }}
            >
              Houve um erro de localização! Você provavelmente não permitiu o
              acesso a localização ou então não estava presente na hora e local
              do evento.
            </p>
            <CtaButton text="Voltar para Home" to="/home" />
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default ErrorLocation;
