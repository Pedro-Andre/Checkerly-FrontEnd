// import { useState } from "react";
// import "./Geolocation.css";

// interface GeoProps {
//   localReceived: (latitude: number, longitude: number) => void;
// }

// const Geolocation: React.FC<GeoProps> = ({ localReceived }) => {
//   const [componentsVisible, setComponentsVisible] = useState(true);

//   const requestLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude, accuracy } = position.coords;
//           console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//           console.log(`Precisão: ${accuracy}`);
//           localReceived(latitude, longitude);
//         },
//         (error) => {
//           console.error("Erro ao obter a localização:", error);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 0,
//         }
//       );
//     } else {
//       console.error("Geolocalização não é suportada pelo navegador");
//     }

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

// ===================== teste =============== \\

import { useState } from "react";
import "./Geolocation.css";

interface GeoProps {
  localReceived: (latitude: number, longitude: number) => void;
}

const Geolocation: React.FC<GeoProps> = ({ localReceived }) => {
  const [componentsVisible, setComponentsVisible] = useState(true);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          console.log(`Precisão: ${accuracy}`);
          localReceived(latitude, longitude);
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
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
