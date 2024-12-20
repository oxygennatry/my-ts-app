import React, { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Header/Header";
import { MainStyle } from "./MainPage.style";
import { Footer } from "../../components/Footer/Footer";
import ListingCard from "../../api/ListingCard";
import { Ipoteca } from "../../components/IpotekaInfo/Ipoteka";

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
];

const Modal: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  property: {
    title: string;
    price: string;
    image: string;
    address: string;
  } | null;
}> = ({ isVisible, onClose, property }) => {
  if (!isVisible || !property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{property.title}</h2>
        <p>Цена: {property.price}</p>
        <p>Адрес: {property.address}</p>
        <img src={property.image} alt={property.title} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export const MainPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState<{
    title: string;
    price: string;
    image: string;
    address: string;
  } | null>(null);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const autocompleteRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (listing: typeof listings[0]) => {
    setSelectedListing(listing);
    setShowModal(true);
  };

  const handleInputClick = () => {
    setShowAutocomplete(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedListing(null);
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
            <button className="inputSearch">
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
        <div key={listing.id} onClick={() => handleCardClick(listing)}>
          <ListingCard
            maxItems={7}
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

      <Ipoteca />

      <Footer />

      
      
    </>
  );
};

export default MainPage;
