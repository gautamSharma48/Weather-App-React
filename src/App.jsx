import { useEffect, useMemo, useState } from "react";
import Input from "./components/input";
import SearchList from "./components/searchList";
import WeatherCard from "./components/weatherCard";
import useGetCurrentWeatherData from "./hooks/useGetCurrentWeatherData";
import ForcastWeatherCard from "./components/forcastWeatherCard";
import Loading from "./components/loading";
import useGetCurrentLocation from "./hooks/useGetCurrentLocation";
import useGetCityByCountryCode from "./hooks/useGetCityByCountryCode";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const { currentLocation } = useGetCurrentLocation(setSelectedCity);
  const { loading, citiesByCountryCode } = useGetCityByCountryCode();
  const { isLoading: weatherLoading, weatherData } = useGetCurrentWeatherData({
    lat: selectedCity?.latitude,
    lon: selectedCity?.longitude,
  });

  const filteredCities = useMemo(() => {
    if (searchResult !== "") {
      return citiesByCountryCode.filter((element) =>
        element.name.toLowerCase().includes(searchResult.toLowerCase())
      );
    }
    return citiesByCountryCode;
  }, [searchResult]);

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  const currentLocationHandler = () => {
    if (selectedCity === currentLocation) return;
    setSelectedCity(currentLocation);
  };

  if (weatherLoading || loading) {
    return <Loading />;
  }

  return (
    <section className="bg-zinc-900 h-full overflow-auto">
      <div className="max-w-[1280px] mx-auto pt-6 py-4 px-4 h-full">
        <div className="flex  items-center justify-between md:flex-row gap-2">
          <div className="flex items-center flex-1">
            <img
              className="w-10 h-10 bg-zinc-900 "
              src="/weather-forecast.png"
            />

            <div className="relative flex-1 w-full md:block hidden">
              <InputField
                searchResult={searchResult}
                handleChange={handleChange}
                setSearchResult={setSearchResult}
                setSelectedCity={setSelectedCity}
                filteredCities={filteredCities}
              />
            </div>
          </div>
          <button
            onClick={currentLocationHandler}
            className="text-white text-sm md:text-base   md:h-10 h-9 w-[130px] md:w-[150px] rounded-full hover:bg-white hover:text-black bg-zinc-600 grid place-items-center"
          >
            Current Location
          </button>
        </div>
        <div className="relative flex-1 w-full md:hidden block">
          <InputField
            searchResult={searchResult}
            handleChange={handleChange}
            isMobileResponsive={true}
            setSearchResult={setSearchResult}
            setSelectedCity={setSelectedCity}
            filteredCities={filteredCities}
          />
        </div>
        <div className="mt-10 grid place-items-center grid-cols-1 gap-4">
          <h3 className="font-bold text-white">Weather</h3>
          {/* this is for searchResult */}
          {
            <div className="flex items-center gap-5 w-full">
              <WeatherCard
                weatherData={weatherData}
                city={`${weatherData?.forcastCity?.name} ${selectedCity?.country} , ${selectedCity?.countryCode}`}
              />
            </div>
          }
          {/* this is for searchResult */}
          {<ForcastWeatherCard forcastData={weatherData?.forecast} />}
        </div>
      </div>
    </section>
  );
}

const InputField = ({
  searchResult,
  isMobileResponsive,
  handleChange,
  setSearchResult,
  setSelectedCity,
  filteredCities,
}) => {
  return (
    <>
      <Input onChange={handleChange} isMobileResponsive={isMobileResponsive} />
      {searchResult && (
        <SearchList
          setSearchResult={setSearchResult}
          setSelectedCity={setSelectedCity}
          data={filteredCities}
        />
      )}
    </>
  );
};

export default App;
