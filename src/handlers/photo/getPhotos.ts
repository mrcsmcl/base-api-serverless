import { fetchPhotos } from './photoService';

const getPhotos = async (request: any, h: any) => {
  const { search } = request.query;

  if (!search) {
    return { error: 'O parâmetro de pesquisa é obrigatório (query param: search)' };
  }

  try {
    const photos = await fetchPhotos(search);
    return { photos };
  } catch (error) {
    console.error('Erro ao buscar fotos:', error);
    return { error: 'Erro ao buscar fotos' };
  }
};

export { getPhotos };