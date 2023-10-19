import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unSubscribe, updateUser } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router()

// update
router.put("/:id", verifyToken, updateUser)

// Delete
router.delete("/:id", verifyToken, deleteUser)

// got a user
router.get("/find/:id", getUser)

// subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

// unsubscribe a user
router.put("/unsub/:id", verifyToken, unSubscribe)

// like a video
router.put("/like/:videoId", verifyToken, like)

// unlike a video
router.put("/dislike/:videoId", verifyToken, dislike)

export default router;