import express from "express";
import { DeleteUser, updateUser, createUser, getUser, getUserById } from "../controller/UserController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/user', verifyUser,adminOnly,getUser);
router.get('/user/:id',verifyUser,adminOnly, getUserById);
router.post('/user', verifyUser,adminOnly, createUser);
router.patch('/user/:id',verifyUser,adminOnly, updateUser);
router.delete('/user/:id', verifyUser,adminOnly, DeleteUser);

// router.get('/user', getUser);
// router.get('/user/:id',getUserById);
// router.post('/user', createUser);
// router.patch('/user/:id', updateUser);
// router.delete('/user/:id',  DeleteUser);

export default router;