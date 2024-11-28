import React, { useState, useEffect, useRef } from "react";
import { WeatherStyle } from "./Weather.style";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MainStyle } from "../MainPage/MainPage.style";

const API_KEY = "3af29db727e63857be58b17e4a457ed1"; // Замените на свой API-ключ

export const Weather: React.FC = () => {
    const [city, setCity] = useState<string>("Tashkent"); // Город по умолчанию
    const [weatherData, setWeatherData] = useState<any>(null); // Данные о погоде
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [inputValue, setInputValue] = useState(""); 
    const autocompleteRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    
    
    const handleInputClick = () => {
        setShowAutocomplete(true);
      };
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
      const handleSearchClick = async () => {
        if (!inputValue) {
          alert("Пожалуйста, введите ID объекта в поле поиска.");
          return;
        }
    }

    // Функция для получения данных о погоде
    const fetchWeather = async (cityName: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Город не найден!");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Получение данных при первом рендере
    useEffect(() => {
        fetchWeather(city);
    }, []);

    // Обработка формы для поиска города
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        }
    };

    return (
        
        <>
        <Header/>
        <MainStyle>
            <div className="MainContainer">
          <div className="input" onClick={handleInputClick}>
            <input
              type="text"
              placeholder="Введите свой адрес"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="inputSearch" onClick={handleSearchClick}>
              <img
                src="https://img.ws.mms.shopee.ph/sg-11134004-23010-10kdah68gzlva9"
                alt="Иконка поиска"
                className="imgSearch"
              />
            </button>
          </div>
          {showAutocomplete && (
            <div className="autocomplete_container" ref={autocompleteRef}>
              <ul className="autocomplete">
                <li className="autocomplete_item">Country</li>
                <li className="autocomplete_item">City</li>
                <li className="autocomplete_item">Location</li>
              </ul>
            </div>
          )}
          <img src="mapbox://styles/mapbox/standard-satellite" alt="" />
        </div>
        </MainStyle>
        <WeatherStyle>
        <div className="weather-container">
            <h1>Погода</h1>
            <form onSubmit={handleSearch} className="weather-form">
                <input
                    type="text"
                    placeholder="Введите город"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="weather-input"
                />
                <button type="submit" className="weather-button">
                    Найти
                </button>
            </form>

            {loading && <p>Загрузка...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && !loading && !error && (
                <div className="weather-info">
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>Ощущается как: {weatherData.main.feels_like}°C</p>
                    <p>Погода: {weatherData.weather[0].description}</p>
                    <p>Ветер: {weatherData.wind.speed} м/с</p>
                    <p>Влажность: {weatherData.main.humidity}%</p>
                </div>
            )}
        </div>
        </WeatherStyle>
        <Footer/>
        </>
    );
};
