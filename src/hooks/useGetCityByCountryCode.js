import React, { useEffect, useState } from "react";
import WeatherService from "../services/weatherService";

const useGetCityByCountryCode = (countryCode = "") => {
  const [loading, setLoading] = useState(false);
  const [citiesByCountryCode, setCitiesByCountryCode] = useState([]);
  useEffect(() => {
    const getCitiesByCountryCode = async () => {
      setLoading(true);
      try {
        const response = await new WeatherService().getCurrentCities(
          countryCode
        );

        setCitiesByCountryCode(response?.geonames);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCitiesByCountryCode();
  }, []);
  return { loading, citiesByCountryCode };
};

export default useGetCityByCountryCode;
