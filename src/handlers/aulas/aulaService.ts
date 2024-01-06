import { saveProgressHandler } from './saveProgress';  // Importe o novo handler
import { auth } from '@/lib/auth';  // Importe o módulo de autenticação
import mongoose from 'mongoose';
import { buildRouter, buildHandler } from '@/lib/router';
import { createAulaHandler } from './createAula';
import { deleteAulaHandler } from './deleteAula';
import { getAulaHandler } from './getAula';
import { listAulasHandler } from './listAulas';
import { updateAulaHandler } from './updateAula';

const router = buildRouter();

router.post('/aulas', auth.verifyLogged(createAulaHandler));
router.get('/aulas/{aulaId}', auth.verifyLogged(getAulaHandler));
router.put('/aulas', auth.verifyLogged(updateAulaHandler));
router.get('/aulas', auth.verifyLogged(listAulasHandler));
router.delete('/aulas/{aulaId}', auth.verifyLogged(deleteAulaHandler));

// Adicione a nova rota para salvar progresso
router.post('/aulas/{aulaId}/mine', auth.verifyLogged(saveProgressHandler));

const main = buildHandler(router);

export { main };

import { Aula } from '@/models/aulaModel';
import { ICreateAula, IUpdateAula } from '@/types/IAula';

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

const listAulas = async (filtro: { titulo?: string; descricao?: string; temVideo?: boolean } = {}) => {
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

  // Verifique se já existe um progresso para esse usuário
  const progressoUsuario = aula.progressPorUsuario.find((progress) => progress.userId.toString() === userId);

  if (progressoUsuario) {
    // Atualize o progresso existente
    progressoUsuario.progress = progress;
    progressoUsuario.performance = performance;
  } else {
    // Crie um novo progresso para o usuário
    aula.progressPorUsuario.push({ userId, progress, performance });
  }

  await aula.save();
  return aula;
};

export { createAula, deleteAula, getAula, listAulas, updateAula, saveProgress };

