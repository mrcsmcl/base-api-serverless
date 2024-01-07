import { saveProgressHandler } from './saveProgress';
import { auth } from '@/lib/auth';
import { buildRouter, buildHandler } from '@/lib/router';
import { createAulaHandler } from './createAula';
import { deleteAulaHandler } from './deleteAula';
import { getAulaHandler } from './getAula';
import { listAulasHandler } from './listAulas';
import { updateAulaHandler } from './updateAula';
import { Aula } from '@/models/aulaModel';
import { ICreateAula, IUpdateAula } from '@/types/IAula';

const router = buildRouter();

router.post('/aulas', auth.verifyLogged(createAulaHandler));
router.get('/aulas/{aulaId}', auth.verifyLogged(getAulaHandler));
router.put('/aulas', auth.verifyLogged(updateAulaHandler));
router.get('/aulas', auth.verifyLogged(listAulasHandler));
router.delete('/aulas/{aulaId}', auth.verifyLogged(deleteAulaHandler));
router.post('/aulas/{aulaId}/mine', auth.verifyLogged(saveProgressHandler));

const main = buildHandler(router);

export { main };

const createAula = async (data: ICreateAula) => {
  const novaAula = await Aula.create(data);
  return novaAula;
};

const deleteAula = async (aulaId: string) => {
  const aulaExcluida = await Aula.findByIdAndDelete(aulaId);
  return aulaExcluida;
};

const getAula = async (aulaId: string) => {
  const aula = await Aula.findById(aulaId);
  return aula;
};

const listAulas = async (filtro: {
  titulo?: string;
  descricao?: string;
  temVideo?: boolean;
  concluido?: boolean;
  progressoMin?: number;
  performanceMax?: number;
} = {}) => {
  const query: any = {};

  if (filtro.titulo) {
    query.titulo = { $regex: filtro.titulo, $options: 'i' };
  }

  if (filtro.descricao) {
    query.descricao = { $regex: filtro.descricao, $options: 'i' };
  }

  if (filtro.temVideo !== undefined) {
    query.urlVideo = { $exists: filtro.temVideo };
  }

  // Adicione condições para filtrar por conclusão, progresso mínimo e performance máxima
  if (filtro.concluido !== undefined) {
    query['progressPorUsuario.progress'] = filtro.concluido ? 100 : { $lt: 100 };
  }

  if (filtro.progressoMin !== undefined) {
    query['progressPorUsuario.progress'] = { $gte: filtro.progressoMin };
  }

  if (filtro.performanceMax !== undefined) {
    query['progressPorUsuario.performance'] = { $lte: filtro.performanceMax };
  }

  const aulas = await Aula.find(query);
  return aulas;
};


const updateAula = async (data: IUpdateAula) => {
  const { aulaId, ...atualizacoes } = data;
  const aulaAtualizada = await Aula.findByIdAndUpdate(
    aulaId,
    { $set: atualizacoes },
    { new: true }
  );
  return aulaAtualizada;
};

const saveProgress = async (userId: string, aulaId: string, progress: number, performance: number) => {
  const aula = await Aula.findById(aulaId);

  if (!aula) {
    throw new Error('Aula não encontrada');
  }

  const userProgress = aula.progressPorUsuario.find((element) => element.userId.toString() === userId.toString());

  if (userProgress && userProgress.progress === 100) {
    throw new Error('Aula já finalizada para este usuário, não é mais possível atualizar o progresso.');
  }

  const userProgressIndex = aula.progressPorUsuario.findIndex((element) => element.userId.toString() === userId.toString());

  if (userProgressIndex !== -1) {
    aula.progressPorUsuario[userProgressIndex].progress = progress;
    aula.progressPorUsuario[userProgressIndex].performance = performance;
  } else {
    aula.progressPorUsuario.push({ userId, progress, performance });
  }

  const totalFinalizados = aula.progressPorUsuario.filter((element) => element.progress === 100).length;
  const totalUsuarios = aula.progressPorUsuario.length;
  const mediaPerformance = totalUsuarios > 0 ? aula.progressPorUsuario.reduce((acc, curr) => acc + curr.performance, 0) / totalUsuarios : 0;

  aula.finalizados = totalFinalizados;
  aula.mediaPerformance = mediaPerformance;

  await aula.save();
  return aula;
};

export { createAula, deleteAula, getAula, listAulas, updateAula, saveProgress };

