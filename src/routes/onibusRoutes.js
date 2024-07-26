import { Router } from "express";
import conn from "../config/conn.js";
import { criarOnibus, editarOnibus, getOnibus } from "../controllers/onibusController.js";



const router = Router();

router.get("/", getOnibus);
router.post("/criar", criarOnibus);
router.put("/editar/:id", editarOnibus);




export default router;