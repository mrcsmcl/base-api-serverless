import { saveProgressHandler } from './saveProgress';  // Importe o novo handler
import { auth } from '@/lib/auth';  // Importe o módulo de autenticação

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
