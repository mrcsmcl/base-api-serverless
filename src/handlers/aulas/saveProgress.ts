import { getAula, saveProgress } from './aulaService';


const saveProgressHandler = async ({ pathParameters, body, user }) => {
  try {
    const { aulaId } = pathParameters;
    const { progress, performance } = body;

    // Verifique se aulaId, progress e performance estão presentes
    if (!aulaId || !progress || !performance) {
      throw new Error('Parâmetros inválidos');
    }

    // Obtenha a aula atual
    const aulaAtual = await getAula(aulaId);

  // Verifique se a aula não é nula e se já está finalizada
  if (aulaAtual !== null && progress === 100) {
    throw new Error('Aula já finalizada, não é possível atualizar o progresso.');
  }
  else{
    // Atualize o progresso apenas se não estiver finalizada, passando o userId
    const aula = await saveProgress(user._id, aulaId, progress, performance);
    return { aula };
  }
  } catch (error) {
    return { error: error.message };
  }
};

//TODO ARRUMAR ERRO DO 100% DE PROGRESSO

export { saveProgressHandler };