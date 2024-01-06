import { updateAula } from './aulaService';

const updateAulaHandler = async ({ body }) => {
  try {
    const aulaAtualizada = await updateAula(body);
    return { aula: aulaAtualizada };
  } catch (error) {
    return { error: error.message };
  }
};

export { updateAulaHandler };
