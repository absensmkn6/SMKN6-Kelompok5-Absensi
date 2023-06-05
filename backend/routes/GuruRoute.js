import express from "express";
import { DeleteGuru, UpdateGuru, createGuru, getGuru, getGuruById } from "../controller/GuruController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/guru',verifyUser, adminOnly, getGuru);
router.get('/guru/:id',verifyUser, adminOnly, getGuruById);
router.post('/guru',verifyUser, adminOnly, createGuru);
router.patch('/guru/:id',verifyUser, adminOnly, UpdateGuru);
router.delete('/guru/:id',verifyUser, adminOnly, DeleteGuru);

// router.get('/siswa', getSiswa);
// router.get('/siswa/:nis', getSiswaByNis);
// router.post('/siswa', createSiswa);
// router.patch('/siswa/:nis', UpdateSiswa);
// router.delete('/siswa/:nis', DeleteSiswa);
export default router;