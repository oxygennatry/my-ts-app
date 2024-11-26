import React, { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Header/Header";
import { MainStyle } from "./MainPage.style";
import { Footer } from "../../components/Footer/Footer";
import ListingCard from "../../api/ListingCard";
import { useNavigate } from "react-router-dom";
import { fetchPropertyDetails } from "../../api/Detail/MainAPI";

export interface PropertyDetail {
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
}

const listings = [
  {
    id: 1,
    title: "Роскошный пентхаус на Манхэттене",
    price: "$3,000,000",
    image:
      "https://www.datocms-assets.com/121312/1710946359-53west53_gallery_28.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000",
    address: "53 West 53rd St, New York, NY",
  },
  {
    id: 2,
    title: "Апартаменты с видом на Центральный парк",
    price: "$2,200,000",
    image:
      "https://www.datocms-assets.com/121312/1710946399-53west53_gallery_30.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000",
    address: "Central Park West, New York, NY",
  },
];

export const MainPage: React.FC = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate("/property/${id}");
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                <li className="autocomplete_item">Country</li>
                <li className="autocomplete_item">City</li>
                <li className="autocomplete_item">Location</li>
              </ul>
            </div>
          )}
        </div>
      </MainStyle>

      {listings.map((listing) => (
        <div key={listing.id} onClick={() => handleCardClick(listing.id)}>
          <ListingCard
            title={listing.title}
            price={listing.price}
            image={listing.image}
            address={listing.address}
          />
        </div>
      ))}

      <MainStyle>
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
      </MainStyle>

     

      <Footer />
    </>
  );
};

export default MainPage;
