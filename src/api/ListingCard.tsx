import React, { useEffect, useState } from "react";
import {
  ListingsContainer,
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  PhotoGallery,
  Loader,
} from "./Properties/ListingCard.style";
import { StyleModal } from "../pages/MainPage/ModalInfo.style";

interface Apartment {
  title?: string;
  price: string;
  location: { name: string };
  coverPhoto?: { url: string };
  photoIDs?: number[];
  area: number;
  id: number;
}

interface ListingCardProps {
  maxItems?: number; 
  title?: string;
  price?: string;
  image?: string;
  address?: string;
}


const ListingCard: React.FC<ListingCardProps> = ({
  maxItems = 10,
  title,
  price,
  image,
  address,
}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  const fetchApartmentData = async () => {
    const url =
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b68f0a2b0mshac4cd25332983c6p1f5373jsnc8c898078e3d",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const formattedData: Apartment[] = data.hits.map((item: any) => ({
        title: item.title || "Заголовок отсутствует",
        price: item.price || "Цена не указана",
        location: item.location[0] || { name: "Не указано" },
        coverPhoto: item.coverPhoto || null,
        photoIDs: item.photoIDs || [],
        area: item.area || 0,
        id: item.id,
      }));

      setApartments(formattedData.slice(0, maxItems));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartmentData();
  }, [maxItems]);

  if (loading) {
    return (
      <Loader>
        <div className="loader"></div>
      </Loader>
    );
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (apartments.length === 0) {
    return <p>Нет доступных квартир.</p>;
  }


  const closeModal = () => {
    setSelectedApartment(null);
  };

  return (
    <div>
      <ListingsContainer>
        {apartments.map((apartment) => (
          <ListingCardContainer
            key={apartment.id}
            onClick={() => setSelectedApartment(apartment)}
          >
            <PhotoGallery>
              <ListingImage
                src={apartment.coverPhoto?.url || "/path/to/placeholder/image.jpg"}
                alt={apartment.title || "Изображение недоступно"}
                onError={(e) => {
                  e.currentTarget.src = "/path/to/placeholder/image.jpg";
                }}
              />
            </PhotoGallery>
            <ListingTitle>{apartment.title || "Заголовок отсутствует"}</ListingTitle>
            <ListingPrice>
              {apartment.price ? `${apartment.price} AED` : "Цена не указана"}
            </ListingPrice>
            <p>
              <strong>Местоположение:</strong> {apartment.location.name || "Не указано"}
            </p>
            <p>
              <strong>Площадь:</strong> {apartment.area ? `${apartment.area} кв.м` : "Не указано"}
            </p>
          </ListingCardContainer>
        ))}
      </ListingsContainer>

      
      <StyleModal>
      {selectedApartment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <h2>{selectedApartment.title || "Заголовок отсутствует"}</h2>
            <img
              src={selectedApartment.coverPhoto?.url || "/path/to/placeholder/image.jpg"}
              alt={selectedApartment.title || "Изображение недоступно"}
            />
            <p>
              <strong>Цена:</strong>{" "}
              {selectedApartment.price ? `${selectedApartment.price} AED` : "Не указана"}
            </p>
            <p>
              <strong>Местоположение:</strong>{" "}
              {selectedApartment.location.name || "Не указано"}
            </p>
            <p>
              <strong>Площадь:</strong>{" "}
              {selectedApartment.area ? `${selectedApartment.area} кв.м` : "Не указана"}
            </p>
          </div>
        </div>
      )}
      </StyleModal>
    </div>
  );
};

export default ListingCard;


