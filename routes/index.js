import { Router } from "express";
import fishRoutes from "./fishes.js";

const router = Router();

router.get("/", (req, res) =>
{ res.redirect("/fishes") });

router.use("/fishes", fishRoutes);

export default router;