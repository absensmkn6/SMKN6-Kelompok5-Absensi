import express from "express";
import { DeleteKelas, UpdateKelas, createKelas, getKelas, getKelasByKodeKelas } from "../controller/KelasController.js";

const router = express.Router();

router.get('/kelas', getKelas);
router.get('/kelas/:kode_kelas', getKelasByKodeKelas);
router.post('/kelas', createKelas);
router.patch('/kelas/:kode_kelas', UpdateKelas);
router.delete('/kelas/:kode_kelas', DeleteKelas);

export default router;