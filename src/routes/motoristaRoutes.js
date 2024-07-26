import { Router } from "express";
import conn from "../config/conn.js";
import { criarMotorista, getMotorista } from "../controllers/motoristaController.js";



const router = Router();

router.get("/", getMotorista);
router.post("/criar", criarMotorista);


export default router;