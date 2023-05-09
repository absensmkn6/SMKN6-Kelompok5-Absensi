import express from "express";
import { DeleteKelas, UpdateKelas, createKelas, getKelas, getKelasByKodeKelas } from "../controller/KelasController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// router.get('/kelas',verifyUser, adminOnly, getKelas);
// router.get('/kelas/:kode_kelas',verifyUser, adminOnly, getKelasByKodeKelas);
// router.post('/kelas',verifyUser, adminOnly, createKelas);
// router.patch('/kelas/:kode_kelas',verifyUser, adminOnly, UpdateKelas);
// router.delete('/kelas/:kode_kelas',verifyUser, adminOnly, DeleteKelas);

router.get('/kelas', getKelas);
router.get('/kelas/:kode_kelas', getKelasByKodeKelas);
router.post('/kelas',createKelas);
router.patch('/kelas/:kode_kelas', UpdateKelas);
router.delete('/kelas/:kode_kelas', DeleteKelas);

export default router;