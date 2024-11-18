import React, { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Header/Header";
import { MainStyle } from "./MainPage.style";
import { Footer } from "../../components/Footer/Footer";
import PropertyDetailComponent from "../../api/Detail/ReturnAPI";
import { fetchPropertyDetails } from "../../api/Detail/MainAPI";


interface PropertyDetail {
  title: string;
  price: number;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  images: Array<{
    url: string;
    title?: string;
  }>;
  [key: string]: any;
}

export const MainPage: React.FC = () => {
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [inputValue, setInputValue] = useState(""); 
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const autocompleteRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

    setLoading(true); 
    try {
      const data = await fetchPropertyDetails(inputValue.trim()); 
      setProperty(data); 
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <Header />
      <MainStyle>
        <div className="MainContainer">
          <div className="input" onClick={handleInputClick}>
            <input
              type="text"
              placeholder="Введите ID объекта (7 цифр начиная с 4)"
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
                <li className="autocomlete_item">Country</li>
                <li className="autocomlete_item">City</li>
                <li className="autocomlete_item">Location</li>
              </ul>
            </div>
          )}
        </div>
        <section className="hero-image">
          <div className="info">
            <h2>Уникальные дома</h2>
            <p>
              Живите по соседству с Дональдом Трампом! Комплекс стоимостью 78,5 миллионов долларов рядом с
              Мар-а-Лаго становится одним из самых дорогих домов недели
            </p>
            <a href="https://www.realtor.com/news/unique-homes/tom-ford-donald-trump-mar-a-lago/">
              Читать статью
            </a>
          </div>
        </section>

   
        {loading && <p>Загрузка данных...</p>}

     
        {property && <PropertyDetailComponent property={property} />}
      </MainStyle>
      <Footer />
    </>
  );
};

export default MainPage;



