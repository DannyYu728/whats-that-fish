import { Router } from 'express';
import * as controllers from "../controllers/fishes.js"

const router = Router();

router.get('/', controllers.getFishes);
router.get('/id/:id', controllers.getFish);
router.get('/name/:name', controllers.getFishName);
router.post('/', controllers.createFish);
router.put('/id/:id', controllers.updateFish);
router.delete('/id/:id', controllers.deleteFish);

export default router