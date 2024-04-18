export default class WeatherService {
  getCurrentCities = (countryCode) => {
    return new Promise(async (resolve, reject) => {
      const url = import.meta.env.VITE_GET_CITY_CODE;
      const response = await fetch(url, { options: "GET" }).then((data) =>
        data.text()
      );

      const result = JSON.parse(response);
      if (!response) {
        return reject({ error: "No Response" });
      }
      return resolve(result);
    });
  };
}
