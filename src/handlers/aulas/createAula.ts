import { createAula } from './aulaService';

const createAulaHandler = async ({ body }) => {
  try {
    const aula = await createAula(body);
    return { aula };
  } catch (error) {
    return { error: error.message };
  }
};

export { createAulaHandler };
