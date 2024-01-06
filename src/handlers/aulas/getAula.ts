import { getAula } from './aulaService';

const getAulaHandler = async ({ pathParameters }) => {
  try {
    const { aulaId } = pathParameters;
    const aula = await getAula(aulaId);
    return { aula };
  } catch (error) {
    return { error: error.message };
  }
};

export { getAulaHandler };
