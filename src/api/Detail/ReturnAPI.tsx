import React from 'react';

// Интерфейс для данных недвижимости
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

// Пропсы компонента
interface PropertyDetailProps {
  property: PropertyDetail; // Данные передаются через пропсы
}

const PropertyDetailComponent: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div>
      <h1>{property.title}</h1>
      <p>Цена: {property.price} AED</p>
      <p>Описание: {property.description}</p>
      <p>
        Расположение: {property.location.city}, {property.location.state}, {property.location.country}
      </p>

      <h2>Фотографии</h2>
      <div>
        {property.images && property.images.length > 0 ? (
          property.images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.title || 'Property Image'} width="300" />
            </div>
          ))
        ) : (
          <p>Нет доступных изображений</p>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailComponent;


