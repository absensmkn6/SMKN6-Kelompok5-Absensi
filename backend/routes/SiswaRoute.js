import express from "express";
import { DeleteSiswa, UpdateSiswa, createSiswa, getSiswa, getSiswaByNis } from "../controller/SiswaController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/siswa',verifyUser, adminOnly, getSiswa);
router.get('/siswa/:nis',verifyUser, adminOnly, getSiswaByNis);
router.post('/siswa',verifyUser, adminOnly, createSiswa);
router.patch('/siswa/:nis',verifyUser, adminOnly, UpdateSiswa);
router.delete('/siswa/:nis',verifyUser, adminOnly, DeleteSiswa);

// router.get('/siswa', getSiswa);
// router.get('/siswa/:nis', getSiswaByNis);
// router.post('/siswa', createSiswa);
// router.patch('/siswa/:nis', UpdateSiswa);
// router.delete('/siswa/:nis', DeleteSiswa);
export default router;