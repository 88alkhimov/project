import React, { useEffect, useState } from "react";
import "../../Components/Footer/Foot.css";

const WeatherBox = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=4fb3c0165c6f23d5b4e5bcad8e8942c5"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  return (
    <div className={`weather-box ${loading ? "loading" : ""}`}>
      {loading ? (
        <p>Loading weather...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        weatherData && (
          <>
            <p>
              Kyiv: {kelvinToCelsius(weatherData.main.temp)}°C | Weather:{" "}
              {weatherData.weather[0].main}
            </p>
          </>
        )
      )}
    </div>
  );
};

export default WeatherBox;
