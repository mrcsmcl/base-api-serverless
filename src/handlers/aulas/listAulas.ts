import { listAulas } from './aulaService';

const listAulasHandler = async ({ queryStringParameters }) => {
  try {
    const filtro = queryStringParameters || {};
    const aulas = await listAulas(filtro);
    return { aulas };
  } catch (error) {
    return { error: error.message };
  }
};

export { listAulasHandler };