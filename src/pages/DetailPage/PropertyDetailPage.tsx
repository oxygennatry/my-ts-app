import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyDetails } from "../../api/Detail/MainAPI";

interface PropertyDetail {
  title: string;
  price: string;
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

const PropertyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Получаем параметр id из URL
    console.log("Property ID:", id);  // Логируем ID, чтобы проверить
  
    const [property, setProperty] = useState<PropertyDetail | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const loadPropertyDetails = async () => {
        if (!id) {
          setError("ID объекта не передано!");
          return;
        }
  
        setLoading(true);
        try {
          const data = await fetchPropertyDetails(id);  // Используем id для загрузки данных
          setProperty(data);
        } catch (err) {
          console.error("Ошибка при запросе:", err);
          setError("Ошибка загрузки данных");
        } finally {
          setLoading(false);
        }
      };
  
      loadPropertyDetails();
    }, [id]);  // Загружаем данные при изменении id
  
    if (loading) {
      return <p>Загрузка...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!property) {
      return <p>Данные не найдены</p>;
    }
  
    return (
      <div>
        <h1>{property.title}</h1>
        <p>Цена: {property.price}</p>
        <p>Описание: {property.description}</p>
        <p>Расположение: {property.location.city}, {property.location.state}, {property.location.country}</p>
        <div>
          {property.images.map((image, index) => (
            <img key={index} src={image.url} alt={image.title || "Фото"} style={{ maxWidth: "300px", margin: "10px" }} />
          ))}
        </div>
      </div>
    );
  };
  

export default PropertyDetailPage;

