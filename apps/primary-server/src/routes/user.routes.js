import express from "express";
import { handleCreateUser,handleDeleteUserProfile,handleGetUserProfile } from "../controllers/user.controllers";
const router = express.Router();



router.post("/create",handleCreateUser);
router.get("/profile",handleGetUserProfile);
router.delete("/delete/:id",handleDeleteUserProfile);

export default router;