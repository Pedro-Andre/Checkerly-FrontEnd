import { useEffect, useState } from "react";

function useGeolocation() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    function getGeo(position: GeolocationPosition) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function errorGeo(error: GeolocationPositionError) {
      console.error("Erro ao obter geolocalização", error);
    }

    const watcher = geo.watchPosition(getGeo, errorGeo);

    return () => geo.clearWatch(watcher);
  }, []);

  return position;
}

export default useGeolocation;
