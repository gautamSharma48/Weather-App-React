import React from "react";

const WeatherCard = ({ weatherData, city }) => {
  if (!weatherData || weatherData === undefined) return null;
  const temperatureRound = (value) => {
    return Math.round(value);
  };
  return (
    <div className="w-full  bg-white text-black border-black shadow border rounded-xl p-5 h-full">
      <div className="grid gap-1.5">
        <div>
          <div className="text-base font-bold text-center md:text-left">
            Weather in {city}
          </div>
          <div className="text-sm text-center md:text-left">
            Currently displaying weather conditions
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              className=""
              src={`/icons/${weatherData?.weather[0]?.icon}.png`}
            />

            <div className="grid gap-0.5">
              <p className="text-3xl font-semibold">
                {temperatureRound(weatherData?.main?.temp)}°C
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {weatherData?.weather[0]?.description}
              </p>
            </div>
          </div>
          <div className="grid gap-1.5 ">
            <p className="flex items-center gap-1.5">
              {/* <ThermometerIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              High:
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.main?.temp_max)}°C
              </span>
            </p>
            <p className="flex items-center gap-1.5">
              {/* <ThermometerIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              Low:
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.main?.temp_min)}°C
              </span>
            </p>
            <p className="flex items-center gap-1.5">
              {/* <DropletIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              Feels like:
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.main?.feels_like)}°C
              </span>
            </p>
            <p className="flex items-center gap-1.5">
              {/* <DropletIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              Humidity:{" "}
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.main?.humidity)}°C
              </span>
            </p>
            <p className="flex items-center gap-1.5">
              {/* <WindIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              Wind:
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.wind?.speed)}km/h
              </span>
            </p>
            <p className="flex items-center gap-1.5">
              {/* <WindIcon className="w-5 h-5 mr-1.5. dark:filter brightness-90" /> */}
              Pressure:{" "}
              <span className="font-bold ml-auto">
                {temperatureRound(weatherData?.main?.pressure)} hPa
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
