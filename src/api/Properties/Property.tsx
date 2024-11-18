import React, { useState, useEffect } from 'react';

interface Location {
  country: string;
  city: string;
  address: string;
}

interface Image {
  url: string;
}

interface Property {
  id: number;
  name: string;
  price: number;
  location: Location;
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: Image[]; // Используем интерфейс для изображений
}

interface PropertyList {
  count: number;
  properties: Property[];
}

const PropertiesList: React.FC = () => {
  const [properties, setProperties] = useState<PropertyList>({ count: 0, properties: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '89f690b227mshcfe59b15167ba13p1215dbjsn50a071f51bc0', // Замените на ваш ключ
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PropertyList = await response.json(); //  важно:  приведение типов 
        setProperties(data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }


  return (
    <div>
      <h2>Список  свойств ({properties.count})</h2>
      <ul>
        {properties.properties.map((property) => (
          <li key={property.id}>
            <h3>{property.name}</h3>
            <p>Цена: {property.price}</p>
            <p>Расположение: {property.location.city}, {property.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesList;