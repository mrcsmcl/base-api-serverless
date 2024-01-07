// src/handlers/photo/handler.ts
import { buildRouter, buildHandler } from '@/lib/router';
import { getPhotos } from './getPhotos';

const router = buildRouter();

router.get('/contents/photos', getPhotos);

const main = buildHandler(router);

export { main };
