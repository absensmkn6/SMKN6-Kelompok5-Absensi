import express from "express";
import { DeleteUser, UpdateUser, createUser, getUser, getUserById } from "../controller/UserController.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/user', verifyUser,adminOnly,getUser);
router.get('/user/:id',verifyUser,adminOnly, getUserById);
router.post('/user', verifyUser,adminOnly, createUser);
router.patch('/user/:id',verifyUser,adminOnly, UpdateUser);
router.delete('/user/:id', verifyUser,adminOnly, DeleteUser);

export default router;