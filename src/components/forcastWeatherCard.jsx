import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const temperatureRound = (value) => {
  return Math.round(value);
};

const ForcastWeatherCard = ({ forcastData }) => {
  const [openDropDown, setOpenDropDown] = useState(0);
  const dayInWeek = new Date().getDay();
  const week_days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const forecastDays = week_days
    .slice(dayInWeek, week_days.length)
    .concat(week_days.slice(0, dayInWeek));

  return (
    <>
      <h3 className="font-bold text-white ">Forecast</h3>
      <div className="grid gap-2 mb-10 w-full border border-black  text-black bg-white  rounded-xl ">
        <div className="grid ">
          {forcastData?.slice(0, 7).map((element, index) => (
            <div
              key={index}
              onClick={() => setOpenDropDown(index)}
              className={`${
                forcastData?.slice(0, 7).length - 1 === index && "border-none"
              } flex items-center justify-between gap-4 p-5 border-b-2 pb-2  transition-all`}
            >
              <div className="flex justify-between cursor-pointer    w-full items-center gap-2">
                <div className="flex items-center">
                  <p className="text-xl font-bold text-orange-500">
                    {" "}
                    {temperatureRound(element?.main?.temp)}°C
                  </p>
                  <img
                    className="w-10 h-10"
                    src={`/icons/${element?.weather[0]?.icon}.png`}
                    alt="icon"
                  />

                  <div className="grid gap-0.5 ml-3">
                    <p className="text-base font-semibold">
                      {forecastDays[index]}
                    </p>
                    <p className="text-sm">{element?.weather[0].description}</p>
                    {openDropDown === index && (
                      <ForcastDetail key={index} element={element} />
                    )}
                  </div>
                </div>
                <MdArrowDropDown
                  className={`${
                    openDropDown === index && "rotate-180"
                  } text-black`}
                  size={28}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ForcastDetail = ({ element }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 md:gap-4 mt-3">
      <p className="text-sm">
        High:{" "}
        <span className="font-bold">
          {temperatureRound(element?.main?.temp_max)}°C
        </span>
      </p>
      <p className="text-sm">
        Low:{" "}
        <span className="font-bold">
          {temperatureRound(element?.main?.temp_min)}°C
        </span>
      </p>
      <p className="text-sm ">
        Humidity:{" "}
        <span className="font-bold">
          {temperatureRound(element?.main?.humidity)}°C
        </span>
      </p>
      <p className="text-sm text-nowrap">
        Feels like:{" "}
        <span className="font-bold">
          {temperatureRound(element?.main?.feels_like)}°C
        </span>
      </p>
      <p className="text-sm">
        Wind:{" "}
        <span className="font-bold">
          {temperatureRound(element?.wind?.speed)}°C
        </span>
      </p>
      <p className="text-sm">
        Pressure:{" "}
        <span className="font-bold">
          {temperatureRound(element?.main?.pressure)}hPa
        </span>
      </p>
    </div>
  );
};
export default ForcastWeatherCard;
