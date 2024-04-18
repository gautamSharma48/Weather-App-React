import React, { useEffect, useState } from "react";

const useGetCurrentLocation = (setSelectedCity) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    const getCurrentLoaction = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `${
              import.meta.env.VITE_CURRENT_LOCATION
            }?lat=${latitude}&lng=${longitude}&username=${
              import.meta.env.VITE_USERNAME
            }`;
            const response = await fetch(url, { options: "GET" }).then((data) =>
              data.text()
            );

            const result = JSON.parse(response);
            const obj = {
              latitude,
              longitude,
              countryCode: result?.countryCode,
              country: result?.countryName,
            };
            setSelectedCity(obj);
            setCurrentLocation(obj);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentLoaction();
  }, []);

  return { currentLocation };
};
export default useGetCurrentLocation;
