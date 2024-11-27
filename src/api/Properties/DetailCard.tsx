import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyDetails } from "../Detail/MainAPI";

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получение externalID из маршрута
  const [property, setProperty] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPropertyDetails = async () => {
      try {
        if (!id) {
          throw new Error("ID объекта не передан.");
        }

        const data = await fetchPropertyDetails(id);
        setProperty(data);
      } catch (err: any) {
        setError(err.message || "Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };

    loadPropertyDetails();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{property?.title || "Название не указано"}</h1>
      <p>Цена: {property?.price || "Не указана"}</p>
      <p>Адрес: {property?.address || "Не указан"}</p>
      <p>Описание: {property?.description || "Нет описания"}</p>
      {/* Вывод других данных, если доступны */}
      {property?.images && (
        <div>
          {property.images.map((image: any, index: number) => (
            <img key={index} src={image.url} alt={image.title || "Фото"} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyDetailPage;
