import { Router } from 'express';
import * as controllers from "../controllers/fishes.js"

const router = Router();

router.get('/', controllers.getFishes);
router.get('/pics', controllers.getFishesWithPic);
router.get('/id/:id', controllers.getFish);
router.get('/name/:speciesName', controllers.getFishName);
router.post('/', controllers.createFish);
router.put('/id/:id', controllers.updateFish);
router.delete('/id/:id', controllers.deleteFish);

export default router

