import express from "express";
import { DeleteSiswa, UpdateSiswa, createSiswa, getSiswa, getSiswaByNis } from "../controller/SiswaController.js";

const router = express.Router();

router.get('/siswa', getSiswa);
router.get('/siswa/:nis', getSiswaByNis);
router.post('/siswa', createSiswa);
router.patch('/siswa/:nis', UpdateSiswa);
router.delete('/siswa/:nis', DeleteSiswa);

export default router;