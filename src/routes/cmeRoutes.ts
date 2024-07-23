import { Router } from "express";
import { getCMEs } from "../controllers/cmeController";

const router = Router();

router.get('/cme', getCMEs)

export default router;