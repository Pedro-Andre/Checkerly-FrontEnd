import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import HomeBtn from "../Buttons/HomeBtn";

function ErroLocation() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
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
            <HomeBtn />
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default ErroLocation;
