import Geolocation from "../assets/components/Geolocation/Geolocation";
import Nav from "../assets/components/Nav/Nav";
import HeroSection from "../assets/components/HeroSection/HeroSection";
import CardsSection from "../assets/components/CardsSection/CardsSection";
import BottomSection from "../assets/components/BottomSection/BottomSection";
import Footer from "../assets/components/Footer/Footer";
import "../App.css";

function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <HeroSection />
          <Geolocation />
        </section>

        <section className="cards-section">
          <CardsSection />
        </section>

        <section>
          <BottomSection />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Home;
