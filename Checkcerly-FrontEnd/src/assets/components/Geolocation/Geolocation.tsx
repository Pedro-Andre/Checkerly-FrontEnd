// import React, { useState } from "react";
// import "./Geolocation.css";

// const Geolocation: React.FC = () => {
//   const [componentsVisible, setComponentsVisible] = useState(true); // Controle de visibilidade de todos os componentes

//   const requestLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         },
//         (error) => {
//           console.error("Erro ao obter a localização:", error);
//         }
//       );
//     } else {
//       console.error("Geolocalização não é suportada pelo navegador");
//     }

//     // Esconde todos os componentes após solicitar a localização
//     setComponentsVisible(false);
//   };

//   return (
//     <>
//       {componentsVisible && (
//         <div className="location">
//           <p>
//             Para fornecer uma melhor experiência, precisamos acessar sua
//             localização. Isso nos permitirá ajustar os dados corretamente de
//             acordo com sua posição atual.
//           </p>
//           <a>
//             <button onClick={requestLocation} className="body-btn">
//               Permitir Localização
//             </button>
//           </a>
//         </div>
//       )}
//     </>
//   );
// };

// export default Geolocation;

import React, { useState } from "react";
import "./Geolocation.css";

interface GeolocationProps {
  locationReceived: (latitude: number, longitude: number) => void;
}

const Geolocation: React.FC<GeolocationProps> = ({ locationReceived }) => {
  const [componentsVisible, setComponentsVisible] = useState(true);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          locationReceived(latitude, longitude);
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador");
    }
    setComponentsVisible(false);
  };

  return (
    <>
      {componentsVisible && (
        <div className="location">
          <p>
            Para fornecer uma melhor experiência, precisamos acessar sua
            localização. Isso nos permitirá ajustar os dados corretamente de
            acordo com sua posição atual.
          </p>
          <a>
            <button onClick={requestLocation} className="body-btn">
              Permitir Localização
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Geolocation;
