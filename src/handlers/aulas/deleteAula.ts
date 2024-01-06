import { deleteAula } from './aulaService';

const deleteAulaHandler = async ({ pathParameters }) => {
  try {
    const { aulaId } = pathParameters;
    const aulaExcluida = await deleteAula(aulaId);
    return { message: 'Aula excluída com sucesso' };
  } catch (error) {
    return { error: error.message };
  }
};

export { deleteAulaHandler };
