export const fetchPropertyDetails = async (externalID: string) => {
    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3b68f0a2b0mshac4cd25332983c6p1f5373jsnc8c898078e3d',
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();
  console.log(response.status);
  
      // Проверяем, есть ли данные в ответе
      if (!text) {
        throw new Error("Пустой ответ от API.");
      }
  
      // Пытаемся распарсить JSON
      try {
        return JSON.parse(text);
      } catch {
        throw new Error("Ошибка парсинга JSON. Возможно, ответ не является корректным JSON.");
      }
    } catch (error) {
      console.error("Ошибка запроса к API:", error);
      throw error;
    }
  };
  
  