import { useState, useEffect } from "react";
import Geolocation from "../assets/components/Geolocation/Geolocation";
import Nav from "../assets/components/Nav/Nav";
import HeroSection from "../assets/components/HeroSection/HeroSection";
import CardsSection from "../assets/components/CardsSection/CardsSection";
import BottomSection from "../assets/components/BottomSection/BottomSection";
import Footer from "../assets/components/Footer/Footer";
import "../App.css";

const Home: React.FC = () => {
  const [userCoords, setUserCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  userCoords;
  const handleLocationReceived = (latitude: number, longitude: number) => {
    setUserCoords({ latitude, longitude });
    localStorage.setItem("userCoords", JSON.stringify({ latitude, longitude }));
  };

  useEffect(() => {
    localStorage.removeItem("userCoords");
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <HeroSection />
          <Geolocation localReceived={handleLocationReceived} />
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
};

export default Home;
