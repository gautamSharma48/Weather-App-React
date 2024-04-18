import { useEffect, useState } from "react";
import { apiKey } from "../constants";

const useGetCurrentWeatherData = ({ lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // Corrected typo in variable name

  useEffect(() => {
    const getCurrentWeatherData = async () => {
      setIsLoading(true);
      if (!lat || !lon) return;
      try {
        const [response, forecast] = await Promise.all([
          fetch(
            `${
              import.meta.env.VITE_GET_WEATHER_LAT_LON
            }?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          ),
          fetch(
            `${
              import.meta.env.VITE_FORCAST_WEATHER
            }?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          ),
        ]);
        const result = await response.json();
        const forecastResult = await forecast.json();

        setForecastData(forecastResult);
        setWeatherData({
          forecast: forecastResult?.list,
          forcastCity: forecastResult?.city,
          ...result,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCurrentWeatherData();
  }, [lat, lon]);

  return { isLoading, weatherData, forecastData };
};

export default useGetCurrentWeatherData;
