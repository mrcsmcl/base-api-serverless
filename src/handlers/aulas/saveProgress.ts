import { getAula, saveProgress } from './aulaService';


const saveProgressHandler = async ({ pathParameters, body, user }) => {
  try {
    const { aulaId } = pathParameters;
    const { progress, performance } = body;

    if (!aulaId || !progress || !performance) {
      throw new Error('Parâmetros inválidos');
    }

    const aulaAtual = await getAula(aulaId);
    const aula = await saveProgress(user._id, aulaId, progress, performance);

    return { aula };
  } catch (error) {
    return { error: error.message };
  }
};

export { saveProgressHandler };