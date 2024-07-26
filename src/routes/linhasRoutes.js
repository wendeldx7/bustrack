import { Router } from "express";
import conn from "../config/conn.js";
import { criarLinhas, getLinhas } from "../controllers/linhasController.js";



const router = Router();

router.get("/", getLinhas);
router.post("/criar", criarLinhas)


export default router;