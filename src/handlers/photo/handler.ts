import { buildRouter, buildHandler } from '@/lib/router';
import { getPhotos } from './getPhotos';
import { auth } from '@/lib/auth';

const router = buildRouter();

router.get('/contents/photos', auth.verifyLogged(getPhotos));

const main = buildHandler(router);

export { main };