import { Router } from 'express';
import * as controllers from "../controllers/fishes.js"

const router = Router();

router.get('/', controllers.getFishes);
router.get('/:id', controllers.getFish);
router.post('/', controllers.createFish);
router.put('/:id', controllers.updateFish);
router.delete('/:id', controllers.deleteFish);

export default router