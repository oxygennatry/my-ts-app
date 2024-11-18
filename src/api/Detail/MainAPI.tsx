export const fetchPropertyDetails = async (externalID: string) => {
  const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '89f690b227mshcfe59b15167ba13p1215dbjsn50a071f51bc0',
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса к API:', error);
    throw error;
  }
};

