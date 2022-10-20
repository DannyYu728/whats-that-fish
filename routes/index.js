import { Router } from "express";
import fishRoutes from "./fishes.js";

const router = Router();

router.use("/fishes", fishRoutes);

export default router;