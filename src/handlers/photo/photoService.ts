import axios, { AxiosResponse } from 'axios';
import { Photo } from '@/models/photoModel';

const fetchPhotos = async (searchTerm: string) => {
  if (!searchTerm) {
    throw new Error('É necessário informar um termo de busca (search).');
  }

  const pixabayApiKey = '41685291-cdd48a139165d5ccd529db0aa';
  const unsplashApiKey = 'KTsEkLxeJany13vonWNtfflZICExHJ23ul2NRyEUum8';
  const pexelsApiKey = 'M4bAhUA8Vf3UVOg0by60snz7NpxmlE2vuTG5bomIrOAr2IJqx2RyLy57';

  let pixabayResponse: AxiosResponse;
  let unsplashResponse: AxiosResponse;
  let pexelsResponse: AxiosResponse;

  try {
    pixabayResponse = await axios.get(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${searchTerm}`);
    unsplashResponse = await axios.get(`https://api.unsplash.com/photos?client_id=${unsplashApiKey}&query=${searchTerm}`);
    pexelsResponse = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
      headers: { Authorization: pexelsApiKey },
    });
  } catch (error) {
    const errorMessages = {
      pixabay: (error.response?.data || {}).message || 'Erro na chamada da API Pixabay.',
      unsplash: error.message || 'Erro na chamada da API Unsplash.',
      pexels: (error.response?.data || {}).message || 'Erro na chamada da API Pexels.',
    };
    throw new Error(`Erro ao buscar fotos: ${errorMessages.pixabay} | ${errorMessages.unsplash} | ${errorMessages.pexels}`);
  }

  const pixabayPhotos = pixabayResponse.data.hits.map((hit: any) => ({
    source: 'Pixabay',
    description: hit.tags,
    url: hit.webformatURL,
  }));

  const unsplashPhotos = unsplashResponse.data.map((photo: any) => ({
    source: 'Unsplash',
    description: photo.alt_description,
    url: photo.urls.regular,
  }));

  const pexelsPhotos = pexelsResponse.data.photos.map((photo: any) => ({
    source: 'Pexels',
    description: photo.url,
    url: photo.src.original,
  }));

  const allPhotos = [...pixabayPhotos, ...unsplashPhotos, ...pexelsPhotos];

  if (allPhotos.length === 0) {
    throw new Error('Nenhuma foto encontrada.');
  }

  await Photo.insertMany(allPhotos);

  return allPhotos;
};

export { fetchPhotos };
