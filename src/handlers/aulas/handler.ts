import { saveProgressHandler } from './saveProgress';
import { auth } from '@/lib/auth';
import { buildRouter, buildHandler } from '@/lib/router';
import { createAulaHandler } from './createAula';
import { deleteAulaHandler } from './deleteAula';
import { getAulaHandler } from './getAula';
import { listAulasHandler } from './listAulas';
import { updateAulaHandler } from './updateAula';
import { getIndicators } from './getIndicators';

const router = buildRouter();

router.post('/aulas', auth.verifyLogged(createAulaHandler));
router.get('/aulas/{aulaId}', auth.verifyLogged(getAulaHandler));
router.put('/aulas', auth.verifyLogged(updateAulaHandler));
router.get('/aulas', auth.verifyLogged(listAulasHandler));
router.delete('/aulas/{aulaId}', auth.verifyLogged(deleteAulaHandler));
router.post('/aulas/{aulaId}/mine', auth.verifyLogged(saveProgressHandler));
router.get('/aulas/indicators', auth.verifyLogged(getIndicators));

const main = buildHandler(router);

export { main };
