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

interface Apartment {
  title?: string;
  price: string;
  location: { name: string };
  coverPhoto?: { url: string };
  photoIDs?: number[];
  area: number;
  id: number;
}

const ListingCard: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApartmentData = async () => {
    const url =
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "89f690b227mshcfe59b15167ba13p1215dbjsn50a071f51bc0", 
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
      setApartments(formattedData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartmentData();
  }, []);

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

  return (
    <div>
      <ListingsContainer>
        {apartments.map((apartment) => (
          <ListingCardContainer key={apartment.id}>
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

      
    </div>
  );
};

export default ListingCard;


