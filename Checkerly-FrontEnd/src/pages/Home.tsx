// import { useState } from "react";
// import Geolocation from "../assets/components/Geolocation/Geolocation";
// import Nav from "../assets/components/Nav/Nav";
// import HeroSection from "../assets/components/HeroSection/HeroSection";
// import CardsSection from "../assets/components/CardsSection/CardsSection";
// import BottomSection from "../assets/components/BottomSection/BottomSection";
// import Footer from "../assets/components/Footer/Footer";
// import "../App.css";

// function Home() {

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <HeroSection />
//           <Geolocation />
//         </section>

//         <section className="cards-section">
//           <CardsSection />
//         </section>

//         <section>
//           <BottomSection />
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </>
//   );
// }

// export default Home;

import React, { useState } from "react";
import Geolocation from "../assets/components/Geolocation/Geolocation";
import Nav from "../assets/components/Nav/Nav";
import HeroSection from "../assets/components/HeroSection/HeroSection";
import CardsSection from "../assets/components/CardsSection/CardsSection";
import BottomSection from "../assets/components/BottomSection/BottomSection";
import Footer from "../assets/components/Footer/Footer";
import "../App.css";

function Home() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  // Função que agora recebe latitude e longitude como parâmetros separados
  const handleLocationReceived = (latitude: number, longitude: number) => {
    setLocation({ lat: latitude, lng: longitude });
    console.log("Location received:", { lat: latitude, lng: longitude });
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <HeroSection />
          <Geolocation locationReceived={handleLocationReceived} />
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
