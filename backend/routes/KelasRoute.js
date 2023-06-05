import express from "express";
import { DeleteKelas, UpdateKelas, createKelas, getKelas, getKelasById } from "../controller/KelasController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/kelas',verifyUser, adminOnly, getKelas);
router.get('/kelas/:id',verifyUser, adminOnly, getKelasById);
router.post('/kelas',verifyUser, adminOnly, createKelas);
router.patch('/kelas/:id',verifyUser, adminOnly, UpdateKelas);
router.delete('/kelas/:id',verifyUser, adminOnly, DeleteKelas);

// router.get('/kelas', getKelas);
// router.get('/kelas/:id', getKelasById);
// router.post('/kelas',createKelas);
// router.patch('/kelas/:id', UpdateKelas);
// router.delete('/kelas/:id', DeleteKelas);

export default router;