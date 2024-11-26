export interface PropertyDetailsResponse {
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

// Функция для получения данных объекта по его ID
export const fetchPropertyDetails = async (externalID: string): Promise<PropertyDetailsResponse> => {
  const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c7312006d1msh9d7b09e3fd48f7cp1e3fd6jsnfd22178cef3f", // Ваш API-ключ
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Объект с указанным ID не найден.");
      } else if (response.status === 401) {
        throw new Error("Ошибка авторизации. Проверьте ваш API-ключ.");
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: PropertyDetailsResponse = await response.json();

    // Проверяем данные на наличие обязательных полей
    if (!data || !data.title || !data.price || !data.location) {
      throw new Error("Некорректные данные, возвращенные API.");
    }

    return data;
  } catch (error) {
    console.error("Ошибка запроса к API:", error);
    throw error;
  }
};


// Тип для списка объектов
export interface Apartment {
  id: number;
  title: string;
  price: string;
  image: string;
  address: string;
}

// Функция для получения списка объектов
export const fetchApartmentData = async (): Promise<Apartment[]> => {
  const url = "https://bayut.p.rapidapi.com/properties/list";
  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3f70efe3f0msh5a8ef344423086bp1ccd03jsn387b6a962f8b", // Ваш API-ключ
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Проверяем, что данные пришли с ожидаемой структурой
    if (!data.hits || !Array.isArray(data.hits)) {
      throw new Error("Некорректные данные, возвращенные API.");
    }

    return data.hits.map((item: any) => ({
      id: item.id,
      title: item.title || "Название отсутствует",
      price: `${item.price} AED` || "Цена не указана",
      image: item.coverPhoto?.url || "/placeholder.jpg",
      address: item.location?.name || "Не указано",
    }));
  } catch (error) {
    console.error("Ошибка загрузки списка объектов:", error);
    throw error;
  }
};
