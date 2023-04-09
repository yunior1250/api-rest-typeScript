import { Router } from 'express';
import { getItems } from '../controllers/order';
import { checkJwt } from '../middleware/session';

/**
 * Esta ruta puede accder  las personas que tine sessicon actiada
 */

const router = Router();

router.get('/',checkJwt,getItems )

export { router };