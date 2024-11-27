import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetailComponent from './ReturnAPI';

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
}

const CardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPropertyDetails = async () => {
        const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '3b68f0a2b0mshac4cd25332983c6p1f5373jsnc8c898078e3d', // Замените на ваш API-ключ
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
          },
        };

        try {
          setLoading(true);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
          }
          const data = await response.json();
          console.log(data);  // Проверьте структуру данных, если есть
          if (data) {
            setProperty(data);
          } else {
            setError('Объект не найден');
          }
        } catch (err: any) {
          setError(err.message || 'Произошла ошибка');
        } finally {
          setLoading(false);
        }
      };

      fetchPropertyDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!property) {
    return <div>Объект не найден</div>;
  }

  return (
    <div>
      <h1>Детали недвижимости</h1>
      <PropertyDetailComponent property={property} />
    </div>
  );
};

export default CardPage;


