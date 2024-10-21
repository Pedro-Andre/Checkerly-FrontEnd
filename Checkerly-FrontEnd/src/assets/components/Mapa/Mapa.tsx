// import { useEffect, useRef, useState } from "react";
// import "./Mapa.css";
// import L from "leaflet";

// interface MapaProps {
//   latitude?: number;
//   longitude?: number;
// }

// function Mapa({ latitude, longitude }: MapaProps) {
//   const [userCoords, setUserCoords] = useState<{
//     latitude: number;
//     longitude: number;
//   } | null>(null);

//   useEffect(() => {
//     if (latitude && longitude) {
//       setUserCoords({ latitude, longitude });
//     }
//   }, [latitude, longitude]);

//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const mapInstanceRef = useRef<L.Map | null>(null);

//   useEffect(() => {
//     if (mapRef.current && !mapInstanceRef.current && userCoords) {
//       mapInstanceRef.current = L.map(mapRef.current).setView(
//         [userCoords.latitude, userCoords.longitude],
//         17
//       );

//       L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 20,
//         attribution:
//           "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
//       }).addTo(mapInstanceRef.current);
//     }
//   }, [userCoords]);

//   return (
//     <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
//   );
// }

// export default Mapa;

// ===================== teste =============== \\

// import { useEffect, useRef, useState } from "react";
// import "./Mapa.css";
// import L from "leaflet";
// import "leaflet-control-geocoder";

// interface MapaProps {
//   latitude: number;
//   longitude: number;
// }

// function Mapa({ latitude, longitude }: MapaProps) {
//   const [userCoords, setUserCoords] = useState<{
//     latitude: number;
//     longitude: number;
//   } | null>(null);

//   const [markers, setMarkers] = useState<L.Marker[]>([]);

//   useEffect(() => {
//     if (latitude && longitude) {
//       setUserCoords({ latitude, longitude });
//     }
//   }, [latitude, longitude]);

//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const mapInstanceRef = useRef<L.Map | null>(null);

//   useEffect(() => {
//     if (mapRef.current && !mapInstanceRef.current && userCoords) {
//       mapInstanceRef.current = L.map(mapRef.current).setView(
//         [userCoords.latitude, userCoords.longitude],
//         16
//       );

//       L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 20,
//         attribution:
//           "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
//       }).addTo(mapInstanceRef.current);

//       mapInstanceRef.current.on("click", (e: L.LeafletMouseEvent) => {
//         const { lat, lng } = e.latlng;
//         const newMarker = L.marker([lat, lng]);

//         newMarker
//           .bindPopup(
//             `<div class="popup-content">
//               <p class="popup-text"> Lat: ${lat.toFixed(
//                 4
//               )}, <br/> Long: ${lng.toFixed(4)}</p>
//               <button id="remove-marker" class="remove-button">Remover marcador</button>
//             </div>`
//           )
//           .openPopup();

//         newMarker.addTo(mapInstanceRef.current!);

//         setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

//         newMarker.on("popupopen", () => {
//           const removeButton = document.getElementById("remove-marker");
//           removeButton?.addEventListener("click", (e) => {
//             e.preventDefault();
//             mapInstanceRef.current?.removeLayer(newMarker);
//             setMarkers((prevMarkers) =>
//               prevMarkers.filter((marker) => marker !== newMarker)
//             );
//           });
//         });
//       });
//     }
//   }, [userCoords]);

//   return (
//     <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
//   );
// }

// export default Mapa;

// ========= BARRA DE BUSCA ========= \\

// import { useEffect, useRef, useState } from "react";
// import "./Mapa.css";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-control-geocoder";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";

// interface MapaProps {
//   latitude: number;
//   longitude: number;
// }

// function Mapa({ latitude, longitude }: MapaProps) {
//   const [userCoords, setUserCoords] = useState<{
//     latitude: number;
//     longitude: number;
//   } | null>(null);

//   const [markers, setMarkers] = useState<L.Marker[]>([]);

//   useEffect(() => {
//     if (latitude && longitude) {
//       setUserCoords({ latitude, longitude });
//     }
//   }, [latitude, longitude]);

//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const mapInstanceRef = useRef<L.Map | null>(null);

//   const addRemoveButtonToMarker = (marker: L.Marker) => {
//     marker.on("popupopen", () => {
//       const removeButton = document.querySelector(".remove-button");
//       if (removeButton) {
//         removeButton?.addEventListener("click", (e) => {
//           e.preventDefault();
//           // e.stopPropagation();

//           mapInstanceRef.current?.removeLayer(marker);
//           setMarkers((prevMarkers) => prevMarkers.filter((m) => m !== marker));
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     if (mapRef.current && !mapInstanceRef.current && userCoords) {
//       // Inicia o mapa
//       mapInstanceRef.current = L.map(mapRef.current).setView(
//         [userCoords.latitude, userCoords.longitude],
//         17
//       );

//       L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 20,
//         attribution:
//           "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
//       }).addTo(mapInstanceRef.current);

//       // definindo o tipo para o geocoder e Adicionando Marcador pela barra de busca
//       const geocoder = (L.Control as any).Geocoder.nominatim();
//       const control = (L.Control as any)
//         .geocoder({
//           geocoder: geocoder,
//           defaultMarkGeocode: false,
//           placeholder: "Procurar local...",
//         })
//         .on("markgeocode", function (e: any) {
//           const latlng = e.geocode.center;
//           const shortName = e.geocode.name.split(",")[0];
//           const { lat, lng } = latlng;

//           const newMarker = L.marker(latlng).addTo(mapInstanceRef.current!);

//           newMarker
//             .bindPopup(
//               `<div class="popup-content">
//                 <p class="popup-text">
//                   ${shortName} <br/>
//                   Lat: ${lat.toFixed(4)}, <br/>
//                   Long: ${lng.toFixed(4)}
//                 </p>
//                 <button class="remove-button">Remover marcador</button>
//               </div>`
//             )
//             .openPopup();

//           mapInstanceRef.current?.setView(latlng, 17);

//           setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

//           addRemoveButtonToMarker(newMarker);
//         })
//         .addTo(mapInstanceRef.current);

//       // Adiciona marcador com click no Mapa
//       mapInstanceRef.current.on("click", (e: L.LeafletMouseEvent) => {
//         const { lat, lng } = e.latlng;
//         const newMarker = L.marker([lat, lng]);

//         newMarker
//           .bindPopup(
//             `<div class="popup-content">
//               <p class="popup-text">
//                 Lat: ${lat.toFixed(4)}, <br/>
//                 Long: ${lng.toFixed(4)}
//               </p>
//               <button class="remove-button">Remover marcador</button>
//             </div>`
//           )
//           .openPopup();

//         newMarker.addTo(mapInstanceRef.current!);

//         setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

//         addRemoveButtonToMarker(newMarker);
//       });
//     }
//   }, [userCoords]);

//   return (
//     <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
//   );
// }

// export default Mapa;

// ========= BARRA DE BUSCA ========= \\

import { useEffect, useRef, useState } from "react";
import "./Mapa.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

interface MapaProps {
  latitude: number;
  longitude: number;
}

function Mapa({ latitude, longitude }: MapaProps) {
  const [userCoords, setUserCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [markers, setMarkers] = useState<L.Marker[]>([]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (latitude && longitude) {
      setUserCoords({ latitude, longitude });
    }
  }, [latitude, longitude]);

  const addRemoveButtonToMarker = (marker: L.Marker) => {
    marker.on("popupopen", () => {
      const removeButton = document.querySelector(".remove-button");
      removeButton?.addEventListener("click", (e) => {
        e.preventDefault();
        mapInstanceRef.current?.removeLayer(marker);
        setMarkers((prevMarkers) => prevMarkers.filter((m) => m !== marker));
      });
    });
    marker.closePopup();
    marker.openPopup();
  };

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && userCoords) {
      // Inicia o mapa na localização do usuário
      mapInstanceRef.current = L.map(mapRef.current).setView(
        [userCoords.latitude, userCoords.longitude],
        17
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
          "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
      }).addTo(mapInstanceRef.current);

      // Definindo o tipo para o geocoder e adicionando marcador pela barra de busca
      const geocoder = (L.Control as any).Geocoder.nominatim();
      const control = (L.Control as any)
        .geocoder({
          geocoder: geocoder,
          defaultMarkGeocode: false,
          placeholder: "Procurar local...",
        })
        .on("markgeocode", (e: any) => {
          const latlng = e.geocode.center;
          const shortName = e.geocode.name.split(",")[0];
          const { lat, lng } = latlng;

          const newMarker = L.marker(latlng).addTo(mapInstanceRef.current!);

          newMarker
            .bindPopup(
              `<div class="popup-content">
                <p class="popup-text">
                  ${shortName} <br/>
                  Lat: ${lat.toFixed(4)}, <br/>
                  Long: ${lng.toFixed(4)}
                </p>
                <span class="remove-button">Remover marcador</span>
              </div>`
            )
            .openPopup();

          mapInstanceRef.current?.flyTo(latlng, 17, {
            animate: true,
            duration: 1.0,
          });

          setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
          addRemoveButtonToMarker(newMarker);

          control._collapse();
        })
        .addTo(mapInstanceRef.current);

      // Adiciona marcador com clique no mapa
      mapInstanceRef.current.on("click", (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        const newMarker = L.marker([lat, lng]);

        newMarker
          .bindPopup(
            `<div class="popup-content">
              <p class="popup-text">
                Lat: ${lat.toFixed(4)}, <br/>
                Long: ${lng.toFixed(4)}
              </p>
              <span class="remove-button">Remover marcador</span>
            </div>`
          )
          .openPopup();

        mapInstanceRef.current?.flyTo({ lat, lng }, 17, {
          animate: true,
          duration: 1.0,
        });

        newMarker.addTo(mapInstanceRef.current!);
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

        addRemoveButtonToMarker(newMarker);
      });
    }
  }, [userCoords]);

  return (
    <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
  );
}

export default Mapa;
