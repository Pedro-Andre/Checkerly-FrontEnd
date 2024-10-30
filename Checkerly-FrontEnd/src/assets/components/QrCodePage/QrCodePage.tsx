// import React from "react";
// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import { useLocation } from "react-router-dom";
// import "./QrCodePage.css";

// const QrCodePage: React.FC = () => {
//   const location = useLocation();
//   const eventInfo = location.state?.eventInfo;

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qr-code-container">
//             <h1>QR Code do Evento</h1>
//             {eventInfo ? (
//               <QRCodeSVG
//                 className="qr-code"
//                 value={`http://localhost:5173/criar-evento/evento-criado/${eventInfo.id}`}
//                 size={364}
//               />
//             ) : (
//               <p>Dados do evento não disponíveis.</p>
//             )}
//           </div>
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </>
//   );
// };

// export default QrCodePage;

// =============== //

// import React, { useEffect, useState } from "react";
// import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
// import { QRCodeSVG } from "qrcode.react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./QrCodePage.css";

// const QrCodePage: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const eventInfo = location.state?.eventInfo;

//   // Localização do usuário e do evento
//   const [userLocation, setUserLocation] = useState<{
//     lat: number;
//     lng: number;
//   } | null>(null);
//   const eventLocation = { lat: eventInfo.lat, lng: eventInfo.lng }; // Suponha que os dados estejam disponíveis

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Erro ao obter localização:", error);
//           navigate("/erro-localizacao");
//         }
//       );
//     } else {
//       console.error("Geolocalização não é suportada pelo navegador.");
//       navigate("/erro-localizacao");
//     }
//   }, [navigate]);

//   // Função para calcular a distância
//   const calculateDistance = (loc1: any, loc2: any) => {
//     const R = 6371e3; // Raio da Terra em metros
//     const lat1 = (loc1.lat * Math.PI) / 180;
//     const lat2 = (loc2.lat * Math.PI) / 180;
//     const delta1 = ((loc2.lat - loc1.lat) * Math.PI) / 180;
//     const delta2 = ((loc2.lng - loc1.lng) * Math.PI) / 180;

//     const a =
//       Math.sin(delta1 / 2) * Math.sin(delta1 / 2) +
//       Math.cos(lat1) *
//         Math.cos(lat2) *
//         Math.sin(delta2 / 2) *
//         Math.sin(delta2 / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c; // Distância em metros
//   };

//   useEffect(() => {
//     if (userLocation) {
//       const distance = calculateDistance(userLocation, eventLocation);

//       if (distance <= 50) {
//         // Defina uma distância tolerável, por exemplo, 50 metros
//         fetch("https://seu-backend.com/enviar-certificado", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             eventId: eventInfo.id,
//             userEmail: "usuario@email.com",
//           }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.success) {
//               alert("Certificado enviado com sucesso!");
//             } else {
//               console.error("Erro ao enviar certificado:", data.message);
//             }
//           })
//           .catch((error) => console.error("Erro de requisição:", error));
//       } else {
//         navigate("/erro-localizacao");
//       }
//     }
//   }, [userLocation, eventLocation, eventInfo, navigate]);

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <section>
//           <div className="qrCode-container">
//             <h1>QR Code do Evento</h1>
//             {eventInfo ? (
//               <QRCodeSVG
//                 className="qrCode"
//                 value={`http://localhost:5173/criar-evento/evento-criado/${eventInfo.id}`}
//                 size={256}
//               />
//             ) : (
//               <p>Dados do evento não disponíveis.</p>
//             )}
//           </div>
//         </section>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </>
//   );
// };

// export default QrCodePage;

// -============- \\

import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { QRCodeSVG } from "qrcode.react";
import { useLocation, useNavigate } from "react-router-dom";
import Geolocation from "../Geolocation/Geolocation";
import "./QrCodePage.css";

const QrCodePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventInfo = location.state?.eventInfo;

  // Localização do usuário e do evento
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [eventLocation, setEventLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Função para buscar a localização do evento do banco de dados
  const fetchEventLocation = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/event/${eventInfo.id}`
      );
      const data = await response.json();
      setEventLocation({ lat: data.lat, lng: data.lng });
    } catch (error) {
      console.error("Erro ao buscar a localização do evento:", error);
    }
  };

  // Função para calcular a distância entre o usuário e o evento
  const calculateDistance = (loc1: any, loc2: any) => {
    const R = 6371e3; // Raio da Terra em metros
    const lat1 = (loc1.lat * Math.PI) / 180;
    const lat2 = (loc2.lat * Math.PI) / 180;
    const delta1 = ((loc2.lat - loc1.lat) * Math.PI) / 180;
    const delta2 = ((loc2.lng - loc1.lng) * Math.PI) / 180;

    const a =
      Math.sin(delta1 / 2) * Math.sin(delta1 / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(delta2 / 2) *
        Math.sin(delta2 / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distância em metros
  };

  // Função chamada pelo componente Geolocation para definir a localização do usuário
  const handleUserLocation = (latitude: number, longitude: number) => {
    setUserLocation({ lat: latitude, lng: longitude });
  };

  // Busca a localização do evento ao carregar a página
  useEffect(() => {
    fetchEventLocation();
  }, []);

  // Compara a distância entre o usuário e o evento
  useEffect(() => {
    if (userLocation && eventLocation) {
      const distance = calculateDistance(userLocation, eventLocation);

      if (distance <= 250) {
        // Tolerância de até 250 metros
        navigate("/sucesso"); // Redireciona para a página de sucesso que você vai criar
      } else {
        navigate("/erro-localizacao"); // Página de erro já existente
      }
    }
  }, [userLocation, eventLocation, navigate]);

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="qr-code-container">
            <h1>QR Code do Evento</h1>
            {eventInfo ? (
              <QRCodeSVG
                className="qr-code"
                value={`http://localhost:5173/criar-evento/evento-criado/${eventInfo._id}`}
                size={256}
              />
            ) : (
              <p>Dados do evento não disponíveis.</p>
            )}
          </div>
        </section>

        {/* Componente Geolocation integrado */}
        <Geolocation localReceived={handleUserLocation} />

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default QrCodePage;
